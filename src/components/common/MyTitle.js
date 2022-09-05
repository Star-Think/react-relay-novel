import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MyTitle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="container mx-auto w-full p-5">
      <div className="card shadow-lg w-full h-full break-all">
        <div className="card-body bg-primary h-72 xl:p-20 lg:p-20 sm:p-20 p-10">
          <div className="flex justify-end">
            <div onClick={() => navigate("/mypage")} className="text-error link link-hover">
              비밀번호 분실에 대비해서 이메일을 입력해주세요.
            </div>
          </div>

          <h2 className="card-title">ㅇㅇ의 일기장</h2>
          <p></p>
        </div>
      </div>

      {pathName.includes("comment") ? (
        <>
          <div className="container mx-auto flex justify-end mt-10">
            <div
              onClick={() => navigate("/my")}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success">
              <i className="fa-solid fa-book-open"></i>&nbsp;일기장 돌아가기
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container mx-auto flex flex-wrap justify-end mt-10">
            <div
              onClick={() => navigate("/my/create")}
              className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">
              <i className="fa-solid fa-pencil"></i>&nbsp;일기 쓰기
            </div>
            <div
              onClick={() => navigate("/my/post-comment")}
              className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md mx-2">
              <i className="fa-solid fa-comment"></i>&nbsp;내가 받은 댓글
            </div>
            <div
              onClick={() => navigate("/my/comment")}
              className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md">
              <i className="fa-solid fa-hand-holding-heart"></i>&nbsp;내가 쓴 댓글
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyTitle;
