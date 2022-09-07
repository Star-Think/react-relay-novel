import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MemoDetail from "../../components/common/MemoDetail";
import MemoReprotModal from "../../components/common/MemoReprotModal";
import CommentCreate from "../../components/common/CommentCreate";
import BasicTemplate from "../../components/templates/BasicTemplate";
import { memoData } from "../../utils/MemoData";

const EveryDetail = () => {
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
              <CommentCreate />
              <MemoReprotModal reportId={"report"} content={"일기"} />
              <MemoReprotModal reportId={"report2"} content={"댓글"} />
            </>
          );
        }}
      />
    </>
  );
};

export default EveryDetail;
