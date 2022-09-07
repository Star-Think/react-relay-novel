import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BasicTemplate from "../../components/templates/BasicTemplate";
import MyTitle from "../../components/common/MyTitle";
import MemoList from "../../components/common/MemoList";

const MyMain = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("access_token");
  const page = location.state !== null ? location.state.page : 1;
  const pageParam = parseInt(page) ? parseInt(page) : 1;
  const row = 23;
  const fIndex = (pageParam - 1) * (row + 1);
  const eIndex = fIndex + row + 1;

  async function getData() {
    try {
      const response = await axios.post(
        "/star/api/diaryGet",
        { page: pageParam, rows: row },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const memoData = response.data.data.list;
      setData(memoData.slice(fIndex, eIndex));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
      return;
    }
    window.scrollTo(0, 0);
    getData();
  }, [page]);

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MyTitle />
              <MemoList memoDataList={data} isMyMemo={true} />
            </>
          );
        }}
      />
    </>
  );
};

export default MyMain;
