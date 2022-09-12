import React from "react";

const Pagination = ({ total, rows, page, setPage }) => {
  const numPages = Math.ceil(total / rows);
  return (
    <div className="btn-group flex justify-center mt-20">
      {page !== 1 ? (
        <div className="btn" onClick={() => setPage(page - 1)}>
          &lt;&lt;
        </div>
      ) : null}

      <div className="btn btn-primary">{page}</div>
      {numPages > page ? (
        <div className="btn" onClick={() => setPage(page + 1)}>
          &gt;&gt;
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
