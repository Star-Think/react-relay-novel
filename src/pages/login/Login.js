import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import InputBox from "../../components/common/InputBox";
import { encrypt } from "../../utils/CryptoJsMake";
import store from "../../store";
import { ADD_USERINFO } from "../../actions/ActionTypes";
import Loading from "../../components/common/Loading";

function Login() {
  const navigate = useNavigate();

  const idRef = useRef();
  const pwdRef = useRef();
  const [idText, setIdText] = useState("");
  const [pwdText, setPwdText] = useState("");
  const [loading, setLoading] = useState(null);

  const lockScroll = React.useCallback(() => {
    document.body.style.height = "100%";
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.height = "";
  }, []);

  const postLogin = async () => {
    lockScroll();
    setLoading(true);
    await axios({
      method: "post",
      url: "/star/api/login",
      data: {
        user_id: idText,
        password: pwdText,
      },
    })
      .then((res) => {
        localStorage.setItem("access_token", res.data.data);
        return userInfo(res.data.data);
      })
      .then((res) => {
        const data = res.data.data;
        store.dispatch({
          type: ADD_USERINFO,
          data: {
            user_id: data.user_id,
            nickname: data.nickname,
            role: data.role,
          },
        });
        setTimeout(() => {
          unlockScroll();
          setLoading(false);
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        unlockScroll();
        setLoading(false);
        console.log(err);
        alert("아이디 또는 비밀번호를 확인하세요");
      });
  };

  const userInfo = async (token) => {
    return await axios({
      method: "get",
      url: "/star/api/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <>
      <Header />
      <div className="flex justify-center mt-40">
        <div className="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12">
          <InputBox
            autofocus={true}
            placeholder="아이디"
            value={idText}
            forwardRef={idRef}
            onChange={(e) => setIdText(e.target.value)}
          />
          <InputBox
            type={"password"}
            placeholder="비밀번호"
            value={pwdText}
            forwardRef={pwdRef}
            onChange={(e) => setPwdText(e.target.value)}
          />
          <div className="flex justify-end mt-5">
            <button className="btn btn-primary btn-block" onClick={() => postLogin()}>
              로그인
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 link link-hover text-warning">
        <div>회원가입</div>
      </div>
      <div className="flex justify-center mt-10 link text-sm text-gray-500">
        <div className="mx-5">아이디 찾기</div>
        <div className="mx-5">비밀번호 찾기</div>
      </div>
      {loading ? <Loading /> : null}
      <Footer />
    </>
  );
}

export default Login;
