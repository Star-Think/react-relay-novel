import React, { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import axios from "axios";
import { useEffect } from "react";

const MyPage = () => {
  const marginTop = {
    marginTop: "180px",
  };
  const width100 = {
    width: "100%",
  };

  const [data, setData] = useState([]);
  const token = localStorage.getItem("access_token");
  // console.log(token);
  const getData = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "/star/api/myPageGet",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data;
      setData(userData.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    console.log(data);
  };


  // email
  const [mailCk, setMailCk] = useState(false);
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    const text = document.querySelector('#email');
    const mailInform = document.querySelector('#mailCkMessage');
    //eslint-disable-next-line
    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    mailInform.style.color = 'crimson';
    if (regEmail.test(text.value) === true) {
        mailInform.innerHTML = '';
        setMailCk(true);
    }else {
        mailInform.innerHTML = '이메일 형식이 아닙니다.';
        setMailCk(false);
    }
  };

  async function editMe() {
    if(mailCk) {
      try {
        const url = "/star/api/myPageUpdate";
        const params = {
          nickname: data.nickname,
          self: data.self,
          email: data.email,
        };
        const response = await axios.post(url, params, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("변경되었습니다.")
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('이메일 형식을 확인해주세요')
    }
  }
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-20" style={marginTop}>
        <div className="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12">
          <div className="label-text">닉네임</div>
          <input
            style={width100}
            onChange={handleChange}
            className="input input-primary input-bordered my-2"
            name="nickname"
            value={data.nickname || ""}
          />
          <h2>자기소개</h2>
          <textarea
            style={width100}
            className="textarea h-36 textarea-bordered textarea-primary"
            name="self"
            value={data.self || ""}
            onChange={handleChange}
            placeholder="자기소개"></textarea>
          <div className="label-text">이메일</div>
          <input
            style={width100}
            className="input input-primary input-bordered my-2"
            name="email"
            value={data.email || ""}
            onChange={handleChange2}
            placeholder="이메일"
            id="email"
          />
           <span id='mailCkMessage' className='small_span'></span>
          <div className="flex justify-end">
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                alert("변경하시겠습니까?");
                editMe();
              }}
              type="submit">
              변경하기
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <a href="/mypage/blacklist" className="text-xs link-hover">
              차단 회원 관리
            </a>
          </div>

          <div className="flex justify-center mt-10">
            <a href="/mypage/changepassword" className="mr-10 link-hover">
              비밀번호 변경
            </a>
            <a href="/mypage/dropout" className="ml-10 text-error link-hover">
              회원 탈퇴
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
