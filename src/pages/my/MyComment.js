import React from "react";
import BasicTemplate from "../../components/templates/BasicTemplate";
import MyTitle from "../../components/common/MyTitle";
import CommentList from "../../components/common/CommentList";

const MyComment = () => {
  return (
    <>
      <BasicTemplate
        Content={() => {
          return (
            <>
              <MyTitle />
              <CommentList />
            </>
          );
        }}
      />
    </>
  );
};

export default MyComment;
