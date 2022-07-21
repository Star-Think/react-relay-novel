import React, { useEffect, useState } from "react";
import MemoList from "../../components/common/MemoList";
import MemoTitle from "../../components/common/MemoTitle";
import BasicTemplate from "../../components/templates/BasicTemplate";
import { memoData } from "../../utils/MemoData";

const RelayMain = () => {
  const [memoDataList, setMemoDataList] = useState([]);

  useEffect(() => {
    memoGet();
  }, []);

  const memoGet = () => {
    setMemoDataList(memoData.slice(0, 24));
  };

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MemoTitle title={"릴레이 소설"} />
              <MemoList memoDataList={memoDataList} />
            </>
          );
        }}
      />
    </>
  );
};

export default RelayMain;
