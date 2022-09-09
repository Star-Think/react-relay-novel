import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CommentList = ({ commentList }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const receivedComment = pathName.includes("received");

  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-start">
        {commentList.map((elem) => (
          <div key={elem.seq} className="lg:w-1/4 md:w-1/2 w-full p-5">
            {receivedComment ? <a href="/post/12693/"></a> : <></>}
            <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
              {receivedComment ? <></> : <a href="/post/12693/"></a>}
              <div className="card-body h-{receivedComment ? '36' : '48'} bg-white">
                <a href="/post/12693/">
                  <div className="flex justify-between">
                    <h2 className="card-title">
                      {receivedComment ? "[내가 받은 댓글]" : "[내가 쓴 댓글]"}
                    </h2>
                  </div>
                  <p>{elem.content}</p>
                </a>
                {receivedComment ? (
                  <></>
                ) : (
                  <>
                    <div className="flex justify-end mt-10">
                      <a href="/post/12693/"></a>
                      <a className="btn btn-sm mx-1" href="/comment/13811/update/">
                        댓글 수정
                      </a>
                      <a className="btn btn-sm btn-error mx-1" href="/comment/13811/delete/">
                        댓글 삭제
                      </a>
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
