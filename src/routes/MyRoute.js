import React from "react";

import { Routes, Route } from "react-router-dom";
import MyMain from "../pages/my/MyMain";
import MemoCreate from "../components/common/MemoCreate";
import MyComment from "../pages/my/MyComment";
import MyDetail from "../pages/my/MyDetail";

const MyRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MyMain />} />
      <Route exact path="/create" element={<MemoCreate />} />
      <Route exact path="/received-comment" element={<MyComment />} />
      <Route exact path="/comment" element={<MyComment />} />
      <Route exact path="/detail/:idx" element={<MyDetail />} />
    </Routes>
  );
};

export default MyRoute;
