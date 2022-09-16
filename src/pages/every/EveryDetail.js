import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MemoDetail from "../../components/common/MemoDetail";
import MemoReprotModal from "../../components/common/MemoReprotModal";
import CommentCreate from "../../components/common/CommentCreate";
import BasicTemplate from "../../components/templates/BasicTemplate";

const EveryDetail = () => {
  const navigate = useNavigate();
  const { idx } = useParams();
  const location = useLocation();
  const data = Array.isArray(location.state.data) ? location.state.data : [location.state.data];

  const [memo, setMemo] = useState({});

  useEffect(() => {
    const memoObj = data.find((it) => it.seq === parseInt(idx));
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
              <CommentCreate memo={memo} />
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
