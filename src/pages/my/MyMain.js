import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BasicTemplate from "../../components/templates/BasicTemplate";
import MyTitle from "../../components/common/MyTitle";
//import MemoList from "../../components/common/MemoList";
//import { memoData } from "../../utils/MemoData";

function MyMain() {
  const token = localStorage.getItem("access_token");
  const location = useLocation();
  const page = location.state !== null ? location.state.page : 1;
  const navigate = useNavigate();

  async function getData() {
    try {
      const response = await axios.get("/star/api/diaryGet", {
        params: {
          page: 1,
          rows: 10,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
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

  /* useEffect(() => {
    memoGet();
  }, [page]);

  const memoGet = () => {
    const pageParam = parseInt(page) ? parseInt(page) : 1;
    const row = 23;

    const fIndex = (pageParam - 1) * (row + 1);
    const eIndex = fIndex + row + 1;
    setMemoDataList(memoData.slice(fIndex, eIndex));
  }; */

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MyTitle />
              {/*<MemoList memoDataList={memoDataList} isMyMemo={true} />*/}
            </>
          );
        }}
      />
    </>
  );
}

export default MyMain;
