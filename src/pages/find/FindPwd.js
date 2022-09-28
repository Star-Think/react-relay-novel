import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import InputBox from "../../components/common/InputBox";
import Loading from "../../components/common/Loading";

const FindPwd = () => {
  const navigate = useNavigate();

  const [emailText, setEmailText] = useState("");
  const [idText, setIdText] = useState("");
  const emailRef = useRef();
  const idRef = useRef();
  const [loading, setLoading] = useState(null);
  const lockScroll = React.useCallback(() => {
    document.body.style.height = "100%";
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.height = "";
  }, []);

  const pwdFindGet = async () => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (emailText.match(regExp) != null) {
      if (idText === "") {
        alert("아이디를 입력해주세요");
        return;
      }

      lockScroll();
      setLoading(true);
      await axios({
        method: "post",
        url: "/star/api/userPwdFindGet",
        data: {
          email: emailText,
          user_id: idText,
        },
      })
        .then((res) => {
          setLoading(false);
          navigate("/find/findResult", {
            state: {
              title: "비밀번호",
            },
          });
        })
        .catch((err) => {
          unlockScroll();
          setLoading(false);
        });
    } else {
      alert("이메일 형식이 잘못됬습니다.");
    }
  };
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20" style={{ marginTop: "11.8rem" }}>
        <div className="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12">
          <InputBox
            placeholder={"이메일"}
            maxLength={"50"}
            autofocus={true}
            value={emailText}
            forwardRef={emailRef}
            onChange={(e) => setEmailText(e.target.value)}
          />
          <InputBox
            placeholder={"아이디"}
            maxLength={"50"}
            autofocus={true}
            value={idText}
            forwardRef={idRef}
            onChange={(e) => setIdText(e.target.value)}
          />
          <div className="flex justify-end">
            <button className="btn btn-primary btn-block mt-5" onClick={pwdFindGet}>
              비밀번호 찾기
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 link link-hover text-warning">
        <div onClick={() => navigate("/login")}>로그인</div>
      </div>
      {loading ? <Loading /> : null}
      <Footer />
    </>
  );
};

export default FindPwd;
