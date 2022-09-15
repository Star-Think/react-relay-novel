import React from "react";

import { Routes, Route } from "react-router-dom";
import ChangePassword from "../pages/mypage/ChangePassword";
import MyPage from "../pages/mypage/MyPage";

const MyPageRoute = () => {
  return (
    <Routes>
        <Route exact path="/" element={<MyPage/>} />
        <Route exact path="/changepassword" element={<ChangePassword/>} />
    </Routes>
  );
};

export default MyPageRoute;
