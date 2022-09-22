import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import MemoDetail from "../../components/common/MemoDetail";
import CommentCreate from "../../components/common/CommentCreate";
import BasicTemplate from "../../components/templates/BasicTemplate";

const MyDetail = () => {
  const navigate = useNavigate();
  const { idx } = useParams();
  const { state } = useLocation();
  const [memo, setMemo] = useState({});

  useEffect(() => {
    if (!state || !state.data) {
      alert("없는 메모입니다.");
      navigate(-2);
      return;
    }
    const data = Array.isArray(state.data) ? state.data : [state.data];
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
              <CommentCreate />
            </>
          );
        }}
      />
    </>
  );
};

export default MyDetail;
