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
  const [nickname, setNickname] = useState("");
  const [self, setSelf] = useState("");
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("access_token");

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
  useEffect(()=> {
    getData();
  }, [])

  useEffect(() => {
    setNickname({nickname: data? data.nickname: ""})
    setSelf({self: data? data.self: ""})
    setEmail({email: data? data.email : ""})
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  async function editMe() {
    try {
      const url = "/star/api/myPageUpdate";
      const params = {
        nickname: data.nickname,
        self: data.self,
        email: data.email
      }
        const response = await axios.post(url, params, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error(error);
    }
}
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-20" style={marginTop}>
        <form className="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12">
          <div className="label-text">닉네임</div>
          <input
            style={width100}
            onChange={handleChange}
            className="input input-primary input-bordered my-2"
            name="nickname"
            value={nickname.nickname || ''}
           
          />

          <h2>자기소개</h2>
          <textarea
            style={width100}
            className="textarea h-36 textarea-bordered textarea-primary"
            name="self"
            value={self.self || ''}
            onChange={handleChange}
            placeholder="자기소개"></textarea>
          <div className="label-text">이메일</div>
          <input
            style={width100}
            className="input input-primary input-bordered my-2"
            name="email"
            value={email.email || ''}
            onChange={handleChange}
            placeholder="이메일"
          />
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
            <a href="/mypage/blacklist/" className="text-xs link-hover">
              차단 회원 관리
            </a>
          </div>

          <div className="flex justify-center mt-10">
            <a href="/mypage/changepassword" className="mr-10 link-hover">
              비밀번호 변경
            </a>
            <a href="/dropout/" className="ml-10 text-error link-hover">
              회원 탈퇴
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
