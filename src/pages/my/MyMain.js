import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BasicTemplate from "../../components/templates/BasicTemplate";
import MyTitle from "../../components/common/MyTitle";
import MemoList from "../../components/common/MemoList";
import MemoPage from "../../components/common/MemoPage";
import store from "../../store";

const MyMain = () => {
  const [data, setData] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const viewId =
    location.state && location.state.viewId
      ? location.state.viewId
      : store.getState().user.userInfo.user_id;
  const nickName =
    location.state && location.state.nickName
      ? location.state.nickName
      : store.getState().user.userInfo.nickname;
  const token = localStorage.getItem("access_token");
  const page = location.state !== null ? location.state.page : 1;
  const pageParam = parseInt(page) ? parseInt(page) : 1;
  const row = 24;

  const getData = async () => {
    try {
      const response = await axios.post(
        "/star/api/diaryGet",
        { page: pageParam, rows: row, view_id: viewId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const memoData = response.data.data;
      setTotalDataCount(memoData.count);
      setData(memoData.list);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
      return;
    }
    getData();
  }, [page]);

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MyTitle memoDataList={data} viewId={viewId} nickName={nickName} />
              <MemoList memoDataList={data} path={"/my"} />
              <MemoPage memoDataCount={totalDataCount} path={"/my"} row={row} />
            </>
          );
        }}
      />
    </>
  );
};

export default MyMain;
