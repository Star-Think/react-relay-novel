import React from "react";

const AdminTop = ({ title }) => {
  return (
    <div className="card shadow-lg w-full h-full break-all">
      <div className="card-body bg-primary h-72 xl:p-20 lg:p-20 sm:p-20 p-10">
        <h2 className="card-title">관리자 페이지</h2>
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default React.memo(AdminTop);
