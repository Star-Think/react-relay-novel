import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import store from "../../store";
import ReportModal from "./ReportModal";

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

  const locationViewId = location.state && location.state.viewId ? location.state.viewId : userId;
  const locationNickName =
    location.state && location.state.nickName ? location.state.nickName : nickName;

  const [modalType, setModalType] = useState("");

  const handleClick = (type, isUser) => {
    setData(type, isUser);
  };

  const setData = async (type, isUser) => {
    try {
      let response = await axios.post(
        `/star/api/${type === "received" ? "commentReceivedGet" : "commentGet"}`,
        {
          page: pageParam,
          rows: row,
          view_id: locationViewId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const commentList = response.data.data.list;
      if (response.data.success) {
        if (isUser) {
          navigate(`/my/${type === "received" ? "received-comment" : "comment"}`, {
            state: { commentList: commentList, memoDataList: memoDataList },
          });
        } else {
          navigate(`/my/${locationViewId}/comment`, {
            state: {
              commentList: commentList,
              memoDataList: memoDataList,
              nickName: locationNickName,
              viewId: locationViewId,
            },
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = async (type) => {
    try {
      const response = await axios.post("/star/api/myPageGet", "", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmail(response.data.data.email);
    } catch (error) {
      console.error(error);
    }
  };

  const getBlockUserCheck = async () => {
    try {
      const response = await axios.post(
        "/star/api/blockUserCheck",
        { block_id: locationViewId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const isBlockUser = response.data && response.data.message === "차단 회원" ? true : false;
      if (isBlockUser) {
        //navigate();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (id) => {
    const modalWrap = document.querySelector(".modal");
    modalWrap.classList.add("modal-open");
    setModalType(id);
  };

  useEffect(() => {
    if (!isComment) {
      getUserInfo();
      if (userId !== locationViewId) {
        getBlockUserCheck();
      }
    }
  }, []);

  return (
    <div className="container mx-auto w-full p-5" style={{ marginTop: "100px" }}>
      <div className="card shadow-lg w-full h-full break-all">
        <div className="card-body bg-primary h-72 xl:p-20 lg:p-20 sm:p-20 p-10">
          {userId !== locationViewId && (isComment || (!isComment && email)) ? (
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
          <h2 className="card-title">{locationNickName}의 일기장</h2>
        </div>
      </div>
      {userId !== locationViewId && !isComment && (
        <>
          <div className="container mx-auto flex justify-end" style={{ marginTop: "10px" }}>
            <div
              onClick={() => {
                openModal("report");
              }}
              className="text-xs text-error link link-hover">
              <div>회원 신고</div>
            </div>
            <span className="mx-2 text-xs">/</span>
            <div
              onClick={() => {
                openModal("block");
              }}
              className="text-xs text-error link link-hover">
              회원 차단
            </div>
          </div>
          <div className="container mx-auto flex justify-end mt-5">
            <div
              className="tooltip tooltip-open tooltip-left tooltip-info"
              data-tip="공개 일기에 달린 공개 댓글만 보여요!">
              <div
                onClick={() => {
                  handleClick("", false);
                }}
                href="/comment/dolphin31/"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-info">
                <i className="fa-solid fa-comment"></i>&nbsp;{locationNickName}의 댓글
              </div>
            </div>
          </div>
          <ReportModal modalType={modalType} blockId={locationViewId} />
        </>
      )}
      {userId === locationViewId && !isComment && (
        <div className="container mx-auto flex flex-wrap justify-end mt-10">
          <div
            onClick={() => navigate("/my/create")}
            className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">
            <i className="fa-solid fa-pencil"></i>&nbsp;일기 쓰기
          </div>
          <div
            onClick={() => {
              handleClick("received", true);
            }}
            className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md mx-2">
            <i className="fa-solid fa-comment"></i>&nbsp;내가 받은 댓글
          </div>
          <div
            onClick={() => {
              handleClick("", true);
            }}
            className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md">
            <i className="fa-solid fa-hand-holding-heart"></i>&nbsp;내가 쓴 댓글
          </div>
        </div>
      )}
      {isComment && (
        <div className="container mx-auto flex justify-end mt-10">
          {locationViewId ? (
            <div
              onClick={() =>
                navigate(`/my/${locationViewId}`, {
                  state: { viewId: locationViewId, nickName: location.state.nickName },
                })
              }
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success">
              <i className="fa-solid fa-book-open"></i>&nbsp;일기장 돌아가기
            </div>
          ) : (
            <div
              onClick={() => navigate("/my")}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success">
              <i className="fa-solid fa-book-open"></i>&nbsp;일기장 돌아가기
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyTitle;
