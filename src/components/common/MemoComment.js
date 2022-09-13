import React from "react";
import { timeChange } from "../../utils/CommonFun";

const MemoComment = ({ data }) => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full divide-y divide-solid bg-white p-5 rounded-3xl">
          {data.map((comment) => {
            return (
              <div key={comment.seq} className="flex justify-between lg:px-5 lg:px-10 py-5">
                <div className="w-4/6">{comment.content}</div>
                <div className="text-right">
                  <div>
                    <a href="/diary/june100322/" className="link-hover link-secondary">
                      {comment.nickname}
                    </a>
                    <p className="text-xs text-gray-500 mt-2">{timeChange(comment.create_date)}</p>
                  </div>

                  <a href="#report2" className="link-hover text-xs pt-5 text-error">
                    신고하기
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MemoComment;
