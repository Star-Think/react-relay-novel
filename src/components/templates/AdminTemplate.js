import React from "react";
import AdminBtnTop from "../admin/AdminBtnTop";
import AdminTop from "../admin/AdminTop";
import Footer from "../common/Footer";
import Header from "../common/Header";

const AdminTemplate = ({ Content, Popup }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto w-full p-5" style={{ marginTop: "100px" }}>
        <AdminTop />
        <AdminBtnTop />
      </div>
      <div className="container mx-auto flex flex-wrap justify-start">
        <Content />
      </div>
      <Popup />
      <Footer />
    </>
  );
};

export default React.memo(AdminTemplate);
