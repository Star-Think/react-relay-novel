import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDiary from "../pages/admin/AdminDiary";

const AdminRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AdminDiary />} />
    </Routes>
  );
};

export default AdminRoute;
