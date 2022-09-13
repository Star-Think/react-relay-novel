import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BasicTemplate from "../../components/templates/BasicTemplate";
import MyTitle from "../../components/common/MyTitle";
import CommentList from "../../components/common/CommentList";
import CommentListEmpty from "../../components/common/CommentListEmpty";
import MemoPage from "../../components/common/MemoPage";

const MyComment = () => {
  const { state } = useLocation();
  const commentLength = state ? state.commentList.length : 0;

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MyTitle />
              {commentLength > 0 ? (
                <CommentList
                  commentList={state.commentList}
                  memoDataList={state.memoDataList}
                  path={"/my"}
                />
              ) : (
                <CommentListEmpty />
              )}
              <MemoPage memoDataCount={commentLength} />
            </>
          );
        }}
      />
    </>
  );
};

export default MyComment;
