import axios from "axios";
import React from "react";
import { useState } from "react";

const CommentCreate = ({ memo }) => {
  const [commentData, setCommentData] = useState({
    comment: "",
    hidden: 0,
  });

  const handleChangeComment = (e) => {
    setCommentData({ ...commentData, comment: e.target.value });
  };

  const handleChangeHidden = (e) => {
    const hiddenName = e.target.value;

    if (hiddenName === "private") {
      setCommentData({ ...commentData, hidden: 1 });
    } else {
      setCommentData({ ...commentData, hidden: 0 });
    }
  };

  const createComment = async (e) => {
    e.preventDefault();

    if (commentData.comment.trim().length === 0) {
      return alert("댓글을 입력하세요");
    }
    const token = localStorage.getItem("access_token");

    const res = await axios.post(
      process.env.REACT_APP_DB_HOST + "/api/commentAdd",
      {
        story_seq: memo.seq,
        content: commentData.comment,
        type: commentData.hidden,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.success) {
      window.location.reload();
      return alert("댓글 작성 완료");
    }

    setCommentData({ ...commentData, comment: "", hidden: 0 });
  };

  return (
    <div className="flex justify-center mt-5 mb-20 mx-5">
      <form
        action="/comment/create/"
        method="post"
        className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full">
        <div className="flex justify-center">
          <textarea
            onChange={handleChangeComment}
            name="content"
            required
            id="id_content"
            placeholder="착한 댓글을 달아주세요."
            maxLength={180}
            className="textarea h-36 textarea-bordered textarea-primary"
            style={{ width: "100%" }}></textarea>
          <select
            name="public"
            required
            onChange={handleChangeHidden}
            id="id_public"
            className="select select-bordered select-primary max-w-xs ml-2">
            <option value="public">공개</option>
            <option value="private">비공개</option>
          </select>
          <button type="submit" className="btn btn-primary ml-2" onClick={createComment}>
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentCreate;
