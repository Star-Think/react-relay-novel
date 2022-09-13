import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MemoPage = ({ memoDataCount, path, row }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.state !== null ? location.state.page : 1;
  const [totalPage, setTotalPage] = useState(1);
  const [PageNum, setPageNum] = useState([]);

  const pageCalculation = () => {
    setTotalPage(Math.ceil(memoDataCount / row));
  };

  const setPage = () => {
    const cur = (page - 1) % 5;
    const back = 5 - cur;
    const front = 5 - back;
    let numList = [];
    for (let i = front; i > 0; i--) {
      numList.push((page / 5) * 5 - i);
    }
    for (let i = 0; i < back; i++) {
      if ((page / 5) * 5 + i > Math.ceil(memoDataCount / row)) break;
      numList.push((page / 5) * 5 + i);
    }
    setPageNum(numList);
  };

  useEffect(() => {
    pageCalculation();
    setPage();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="btn-group flex justify-center mt-20">
      {page !== 1 ? (
        <div onClick={() => navigate(path, { state: { page: 1 } })} className="btn">
          &lt;&lt;
        </div>
      ) : null}
      {page !== 1 ? (
        <div onClick={() => navigate(path, { state: { page: page - 1 } })} className="btn">
          &lt;
        </div>
      ) : null}

      {PageNum.map((pg) => {
        return (
          <div key={pg}>
            {page === pg ? (
              <div
                className="btn btn-primary bg-black text-white"
                onClick={() => navigate(path, { state: { page: pg } })}>
                {pg}
              </div>
            ) : (
              <div
                className="btn btn-primary"
                onClick={() => navigate(path, { state: { page: pg } })}>
                {pg}
              </div>
            )}
          </div>
        );
      })}

      {page !== totalPage ? (
        <div onClick={() => navigate(path, { state: { page: page + 1 } })} className="btn">
          &gt;
        </div>
      ) : null}
      {page !== totalPage ? (
        <div onClick={() => navigate(path, { state: { page: totalPage } })} className="btn">
          &gt;&gt;
        </div>
      ) : null}
    </div>
  );
};

export default MemoPage;
