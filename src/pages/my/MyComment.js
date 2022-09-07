import React from "react";
import BasicTemplate from "../../components/templates/BasicTemplate";
import MyTitle from "../../components/common/MyTitle";
import CommentList from "../../components/common/CommentList";
import CommentListEmpty from "../../components/common/CommentListEmpty";

const MyComment = () => {
  // comment empty test
  const commentLength = 0;

  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MyTitle />
              {commentLength > 0 ? <CommentList /> : <CommentListEmpty />}
            </>
          );
        }}
      />
    </>
  );
};

export default MyComment;
