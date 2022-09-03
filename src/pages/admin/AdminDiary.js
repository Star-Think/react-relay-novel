import React from "react";
import BasicTemplate from "../../components/templates/BasicTemplate";

const AdminDiary = () => {
  return (
    <BasicTemplate
      Content={() => {
        return (
          <>
            <div style={{ marginTop: "100px" }}>관리자페이지</div>
          </>
        );
      }}
    />
  );
};

export default AdminDiary;
