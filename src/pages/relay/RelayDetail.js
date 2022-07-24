import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MemoDetail from "../../components/common/MemoDetail";
import MemoReprotModal from "../../components/common/MemoReprotModal";
import MemoWrite from "../../components/common/MemoWrite";
import BasicTemplate from "../../components/templates/BasicTemplate";
import { memoData } from "../../utils/MemoData";

const RelayDetail = () => {
  const navigate = useNavigate();
  const { idx } = useParams();

  const [memo, setMemo] = useState({});

  useEffect(() => {
    const memoObj = memoData.find((it) => it.idx === parseInt(idx));
    if (memoObj) {
      setMemo(memoObj);
    } else {
      alert("없는 메모입니다.");
      navigate(-1);
    }
  }, [idx]);

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MemoDetail memo={memo} />
              <MemoWrite />
              <MemoReprotModal reportId={"report"} content={"일기"} />
              <MemoReprotModal reportId={"report2"} content={"댓글"} />
            </>
          );
        }}
      />
    </>
  );
};

export default RelayDetail;
