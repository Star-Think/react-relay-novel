import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyTitle from "../../components/common/MyTitle";
import MemoList from "../../components/common/MemoList";
import BasicTemplate from "../../components/templates/BasicTemplate";
import { memoData } from "../../utils/MemoData";

const MyMain = () => {
  const [memoDataList, setMemoDataList] = useState([]);
  const location = useLocation();
  const page = location.state !== null ? location.state.page : 1;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
    }
    memoGet();
    window.scrollTo(0, 0);
  }, [page]);

  const memoGet = () => {
    const pageParam = parseInt(page) ? parseInt(page) : 1;
    const row = 23;

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
              <MyTitle />
              <MemoList memoDataList={memoDataList} isMyMemo={true} />
            </>
          );
        }}
      />
    </>
  );
};

export default MyMain;
