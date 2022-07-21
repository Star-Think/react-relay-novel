import React from "react";
import MemoItem from "./MemoItem";
import MemoPage from "./MemoPage";

const MemoList = ({ memoDataList }) => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-start">
        {memoDataList.map((mData) => {
          return <MemoItem key={mData.idx} memo={mData} />;
        })}
      </div>
      <MemoPage />
    </>
  );
};

export default MemoList;
