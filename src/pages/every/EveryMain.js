import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MemoList from "../../components/common/MemoList";
import MemoPage from "../../components/common/MemoPage";
import MemoTitle from "../../components/common/MemoTitle";
import BasicTemplate from "../../components/templates/BasicTemplate";

const EveryMain = () => {
  const [memoDataList, setMemoDataList] = useState([]);
  const location = useLocation();
  const page = location.state !== null ? location.state.page : 1;
  const navigate = useNavigate();
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [page]);

  async function getData() {
    try {
      const response = await axios.post("/star/api/diaryGet", {
        page: page,
      });
      console.log(response);
      const memoData = response.data.data.list;

      memoData.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      });
      const pageParam = parseInt(page) ? parseInt(page) : 1;
      const row = 23;

      const fIndex = (pageParam - 1) * (row + 1);
      const eIndex = fIndex + row + 1;

      setMemoDataList(memoData.slice(fIndex, eIndex));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MemoTitle title={"모두의 일기"} />
              <MemoList memoDataList={memoDataList} path={"/everydiary"} />
              <MemoPage memoDataCount={memoDataList.length} path={"/everydiary"} />
            </>
          );
        }}
      />
    </>
  );
};

export default EveryMain;
