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
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [page]);

  async function getData() {
    const token = localStorage.getItem("access_token");

    try {
      const response = await axios.post(
        process.env.REACT_APP_DB_HOST + "/api/diaryGet",
        { page: page, rows: 10 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response);
      const memoData = response.data.data.list;
      setTotalPage(
        response.data.data.count % 10 === 0
          ? response.data.data.count / 10
          : parseInt(response.data.data.count / 10) + 1
      );

      memoData.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      });

      setMemoDataList(memoData);
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
              {memoDataList && (
                <>
                  <MemoTitle title={"모두의 일기"} />
                  <MemoList memoDataList={memoDataList} path={`/everydiary/${page}`} />
                  <MemoPage
                    memoDataCount={memoDataList.length}
                    totalPage={totalPage}
                    path={"everydiary"}
                  />
                </>
              )}
            </>
          );
        }}
      />
    </>
  );
};

export default EveryMain;
