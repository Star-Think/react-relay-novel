import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CommentList = ({ commentList, memoDataList, path }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  const receivedComment = pathName.includes("received");
  const memoData = memoDataList.filter((elem) => {
    return elem.seq === commentList[0].story_seq;
  });

  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-start">
        {commentList.map((elem) => (
          <div key={elem.seq} className="lg:w-1/4 md:w-1/2 w-full p-5">
            <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
              <div className={"card-body h-" + (receivedComment ? "36" : "48") + " bg-white"}>
                <div
                  onClick={() =>
                    navigate(`${path}/detail/${elem.story_seq}`, { state: { data: memoData } })
                  }
                  style={{ cursor: "pointer" }}>
                  <div className="flex justify-between">
                    <h2 className="card-title">
                      {receivedComment ? "[내가 받은 댓글]" : "[내가 쓴 댓글]"}
                    </h2>
                  </div>
                  <p>{elem.content}</p>
                </div>
                {receivedComment ? (
                  <></>
                ) : (
                  <>
                    <div className="flex justify-end mt-10">
                      <div
                        onClick={() =>
                          navigate(`${path}/detail/${elem.story_seq}`, {
                            state: { data: memoData },
                          })
                        }
                        className="btn"></div>
                      <div
                        onClick={() => navigate("/my/edit-comment", { state: { data: elem } })}
                        className="btn btn-sm mx-1">
                        댓글 수정
                      </div>
                      <div
                        onClick={() =>
                          navigate("/my/delete-comment", {
                            state: { seq: elem.seq, storySeq: elem.story_seq },
                          })
                        }
                        className="btn btn-sm btn-error mx-1">
                        댓글 삭제
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
