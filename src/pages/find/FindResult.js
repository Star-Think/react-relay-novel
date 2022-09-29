import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

const FindResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state.title;
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 mx-10" style={{ marginTop: "11.3rem" }}>
        <p className="text-success text-3xl">{title}가 발송되었습니다.</p>
      </div>
      <div className="flex justify-center mt-10 mx-10 text-center">
        <p>
          가입한 계정이 없거나 이메일이 잘못된 경우에는 아이디가 발송되지 않습니다.
          <br />
          만약 이메일을 받지 못하였다면 이메일을 다시 확인하거나 스팸 메일함을 확인해주세요.
        </p>
      </div>
      <div className="flex justify-center mt-10 mb-20 link link-hover text-warning">
        <div onClick={() => navigate("/login")}>로그인</div>
      </div>
      <Footer />
    </>
  );
};

export default FindResult;
