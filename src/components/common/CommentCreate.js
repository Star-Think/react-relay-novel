import axios from "axios";
import React from "react";
import { useRef } from "react";

const CommentCreate = ({ memo }) => {
  const comment = useRef(null);

  const createComment = async (data) => {
    if (comment.current.value.trim().length === 0) {
      return alert("댓글을 입력하세요");
    }
    comment.current.value = "";
    const token = localStorage.getItem("access_token");

    const res = await axios.post(
      "/star/api/commentAdd",
      {
        story_seq: memo.seq,
        content: data,
        type: 0,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.success) {
      window.location.reload();
      return alert("댓글 작성 완료");
    }
  };

  return (
    <div className="flex justify-center mt-5 mb-20 mx-5">
      <form
        action="/comment/create/"
        method="post"
        className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full">
        <div className="flex justify-center">
          <textarea
            ref={comment}
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
            id="id_public"
            className="select select-bordered select-primary max-w-xs ml-2">
            <option value="public">공개</option>
            <option value="private">비공개</option>
          </select>
          <button
            type="submit"
            className="btn btn-primary ml-2"
            onClick={(e) => {
              e.preventDefault();
              createComment(comment.current.value);
            }}>
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentCreate;
