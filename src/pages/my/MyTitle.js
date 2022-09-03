import React from "react";
import { Link } from "react-router-dom";

const MyTitle = () => {
  return (
    <div className="container mx-auto w-full p-5">
      <div className="card shadow-lg w-full h-full break-all">
        <div className="card-body bg-primary h-72 xl:p-20 lg:p-20 sm:p-20 p-10">
          <div className="flex justify-end">
            <Link to={"/mypage"} href="/mypage/" className="text-error link link-hover">
              비밀번호 분실에 대비해서 이메일을 입력해주세요.
            </Link>
          </div>

          <h2 className="card-title">ㅇㅇ의 일기장</h2>
          <p></p>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-end mt-10">
        <a href="/post/create/" className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">
          <i className="fa-solid fa-pencil"></i>&nbsp;일기 쓰기
        </a>
        <a
          href="/mypost_comment/"
          className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md mx-2">
          <i className="fa-solid fa-comment"></i>&nbsp;내가 받은 댓글
        </a>
        <a href="/mycomment/" className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md">
          <i className="fa-solid fa-hand-holding-heart"></i>&nbsp;내가 쓴 댓글
        </a>
      </div>
    </div>
  );
};

export default MyTitle;
