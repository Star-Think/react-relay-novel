import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import MyTitle from "../../components/common/MyTitle";
import CommentList from "../../components/common/CommentList";
import CommentListEmpty from "../../components/common/CommentListEmpty";
import MemoPage from "../../components/common/MemoPage";

const MyComment = () => {
  const location = useLocation();

  const commentLength =
    location.state && location.state.commentList ? location.state.commentList.length : 0;

  console.log(location.state);
  return (
    <>
      <Header />

      <MyTitle />
      {commentLength > 0 ? (
        <CommentList
          commentList={location.state.commentList}
          memoDataList={location.state.memoDataList}
          path={"/my"}
        />
      ) : (
        <CommentListEmpty />
      )}
      <MemoPage memoDataCount={commentLength} path={location.pathname} row={12} />

      <Footer />
    </>
  );
};

export default MyComment;
