import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import InputBox from "../../components/common/InputBox";

const FindId = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20" style={{ marginTop: "15.8rem" }}>
        <div className="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12">
          <InputBox placeholder={"이메일"} maxLength={"50"} autofocus={true} />
          <div className="flex justify-end">
            <button className="btn btn-primary btn-block mt-5">아이디 찾기</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 link link-hover text-warning">
        <div onClick={() => navigate("/login")}>로그인</div>
      </div>
      <Footer />
    </>
  );
};

export default FindId;
