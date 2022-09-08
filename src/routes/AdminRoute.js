import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDiary from "../pages/admin/AdminDiary";
import AdminComment from "../pages/admin/AdminComment";
import AdminUser from "../pages/admin/AdminUser";

const AdminRoute = () => {
  return (
    <Routes>
      <Route exact path="/diary" element={<AdminDiary />} />
      <Route exact path="/comment" element={<AdminComment />} />
      <Route exact path="/user" element={<AdminUser />} />
    </Routes>
  );
};

export default AdminRoute;
