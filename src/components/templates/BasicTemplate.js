import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

const BasicTemplate = ({ Content }) => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default BasicTemplate;
