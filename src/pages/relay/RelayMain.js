import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MemoList from "../../components/common/MemoList";
import MemoPage from "../../components/common/MemoPage";
import MemoTitle from "../../components/common/MemoTitle";
import BasicTemplate from "../../components/templates/BasicTemplate";
import { memoData } from "../../utils/MemoData";

const RelayMain = () => {
  const [memoDataList, setMemoDataList] = useState([]);
  const location = useLocation();
  const page = location.state !== null ? location.state.page : 1;
  const navigate = useNavigate();
  const row = 24;

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
    }
    memoGet();
    window.scrollTo(0, 0);
  }, [page]);

  const memoGet = () => {
    const pageParam = parseInt(page) ? parseInt(page) : 1;
    const fIndex = (pageParam - 1) * (row + 1);
    const eIndex = fIndex + row + 1;
    setMemoDataList(memoData.slice(fIndex, eIndex));
  };

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MemoTitle title={"릴레이 소설"} />
              <MemoList memoDataList={memoDataList} />
              <MemoPage memoDataCount={memoData.length} path={"/relay"} row={row} />
            </>
          );
        }}
      />
    </>
  );
};

export default RelayMain;
