import React from "react";
import MemoItem from "./MemoItem";
import { useEffect, useState } from "react";
import { timeChange } from "../../utils/CommonFun";

const MemoList = ({ memoDataList, isMyMemo }) => {
  const [DateList, setDateList] = useState([]);
  let dateList = [];

  useEffect(() => {
    memoDataList.forEach((memoData) => {
      /* 가데이터일 경우 create_date->date, idx->seq(from "../../utils/MemoData";) */
      if (!memoData.create_date) {
        memoData.create_date = memoData.date;
        memoData.seq = memoData.idx;
        memoData.view = memoData.views;
      }
      /* 가데이터일 경우 (from "../../utils/MemoData";) */

      if (dateList[dateList.length - 1] !== memoData.create_date) {
        dateList.push(memoData.create_date);
      }
    });
    setDateList(dateList);
  }, []);

  return (
    <>
      {DateList.length !== 0 ? (
        <div>
          {DateList.map((date) => {
            return (
              <div key={date}>
                <p className="text-center">{timeChange(date)}</p>
                <div className="container mx-auto flex flex-wrap justify-start">
                  {memoDataList.map((mData) => {
                    if (mData.create_date === date) {
                      return <MemoItem key={mData.seq} memo={mData} isMyMemo={isMyMemo} />;
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default MemoList;
