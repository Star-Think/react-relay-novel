import React from "react";

import { Routes, Route } from "react-router-dom";
import BlockMember from "../pages/mypage/BlockMember";
import ChangePassword from "../pages/mypage/ChangePassword";
import MyPage from "../pages/mypage/MyPage";

const MyPageRoute = () => {
  return (
    <Routes>
        <Route exact path="/" element={<MyPage/>} />
        <Route exact path="/changepassword" element={<ChangePassword/>} />
        <Route exact path="/blacklist" element={<BlockMember/>} />
    </Routes>
  );
};

export default MyPageRoute;
