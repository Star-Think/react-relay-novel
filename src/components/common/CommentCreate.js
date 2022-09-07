import React from "react";

const CommentCreate = () => {
  return (
    <div className="flex justify-center mt-5 mb-20 mx-5">
      <form
        action="/comment/create/"
        method="post"
        className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full">
        <div className="flex justify-center">
          <textarea
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
          <button type="submit" className="btn btn-primary ml-2">
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentCreate;
