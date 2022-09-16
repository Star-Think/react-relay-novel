import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { timeChange } from "../../utils/CommonFun";

const MemoComment = ({ data }) => {
  const navigate = useNavigate();
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
                    <div
                      onClick={() =>
                        navigate(`/my/${comment.user_id}`, {
                          state: { viewId: comment.user_id, nickName: comment.nickname },
                        })
                      }
                      className="link-hover link-secondary">
                      {comment.nickname}
                    </div>
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
