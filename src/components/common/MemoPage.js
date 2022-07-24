import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MemoPage = ({ memoDataCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.state !== null ? location.state.page : 1;
  const [totalPage, setTotalPage] = useState(1);

  const pageCalculation = () => {
    setTotalPage(Math.ceil(memoDataCount / 24.0));
  };

  useEffect(() => {
    pageCalculation();
  }, [memoDataCount]);

  return (
    <div className="btn-group flex justify-center mt-20">
      {page !== 1 ? (
        <div
          onClick={() => navigate("/relay", { state: { page: page - 1 } })}
          className="btn"
        >
          &lt;&lt;
        </div>
      ) : null}

      <div className="btn btn-primary">{page}</div>
      {page !== totalPage ? (
        <div
          onClick={() => navigate("/relay", { state: { page: page + 1 } })}
          className="btn"
        >
          &gt;&gt;
        </div>
      ) : null}
    </div>
  );
};

export default MemoPage;
