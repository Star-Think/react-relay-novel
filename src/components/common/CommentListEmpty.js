import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CommentListEmpty = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-start">
        <div className="lg:w-1/4 md:w-1/2 w-full p-5">
          <div onClick={() => navigate("/everydiary")}>
            <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
              <div className="card-body h-36">
                <h2 className="card-title">댓글이 없습니다.</h2>
                <p>여기를 눌러서 댓글을 써 보세요!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentListEmpty;
