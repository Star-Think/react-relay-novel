import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import store from "../../store";

const MyTitle = ({ memoDataList }) => {
  const nickName = store.getState().user.userInfo.nickname;
  const userId = store.getState().user.userInfo.user_id;
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const isComment = pathName.includes("comment");

  const token = localStorage.getItem("access_token");
  const page = location.state !== null ? location.state.page : 1;
  const pageParam = parseInt(page) ? parseInt(page) : 1;
  const row = 12;

  const [email, setEmail] = useState("");

  const handleClick = (type) => {
    setData(type);
  };

  const setData = async (type) => {
    try {
      let response = await axios.post(
        `/star/api/${type === "received" ? "commentReceivedGet" : "commentGet"}`,
        {
          page: pageParam,
          rows: row,
          view_id: userId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const commentList = response.data.data.list;
      navigate(`/my/${type === "received" ? "received-comment" : "comment"}`, {
        state: { commentList: commentList, memoDataList: memoDataList },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = async (type) => {
    try {
      let response = await axios.post("/star/api/myPageGet", "", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmail(response.data.data.email);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="container mx-auto w-full p-5" style={{ marginTop: "100px" }}>
      <div className="card shadow-lg w-full h-full break-all">
        <div className="card-body bg-primary h-72 xl:p-20 lg:p-20 sm:p-20 p-10">
          {isComment || (!isComment && email) ? (
            <></>
          ) : (
            <>
              <div className="flex justify-end">
                <div onClick={() => navigate("/mypage")} className="text-error link link-hover">
                  비밀번호 분실에 대비해서 이메일을 입력해주세요.
                </div>
              </div>
            </>
          )}
          <h2 className="card-title">{nickName}의 일기장</h2>
          <p></p>
        </div>
      </div>

      {isComment ? (
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
              onClick={() => {
                handleClick("received");
                navigate("/my/receive-comment");
              }}
              className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md mx-2">
              <i className="fa-solid fa-comment"></i>&nbsp;내가 받은 댓글
            </div>
            <div
              onClick={() => {
                handleClick("");
                navigate("/my/comment");
              }}
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
