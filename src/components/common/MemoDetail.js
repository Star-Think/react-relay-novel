import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MemoComment from "./MemoComment";
import store from "../../store";

const MemoDetail = ({ memo }) => {
  const navigate = useNavigate();
  const [commentData, setCommentData] = useState([]);
  const token = localStorage.getItem("access_token");
  const userId = store.getState().user.userInfo.user_id;
  const memoSeq = memo.seq;
  const getData = async () => {
    try {
      const response = await axios.post(
        "/star/api/diaryDetail",
        { seq: memoSeq, user_id: memo.user_id }
        // { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = response.data.data.clist;
      setCommentData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (memo.seq) {
      getData();
    }
  }, [memo]);

  return (
    <>
      <div className="flex justify-center mt-5 mx-5">
        <div className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full h-full card shadow-lg break-all min-h-screen">
          <div className="card-body bg-white lg:p-24">
            <div className="flex justify-between mb-10">
              <div className="badge badge-primary">{memo.type === 0 ? "모두 공개" : "비공개"}</div>
            </div>

            <h2 className="card-title text-center mb-20">{memo.title}</h2>
            <div className="flex justify-between">
              <div>
                <div
                  onClick={() =>
                    navigate(`/my/${memo.user_id}`, {
                      state: { viewId: memo.user_id, nickName: memo.nickname },
                    })
                  }
                  className="link-hover link-secondary">
                  {memo.nickname}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500"> {memo.create_date}</p>
                <p className="text-sm text-gray-500 text-right">조회수 {memo.view}</p>
              </div>
            </div>
            <div className="divider mb-10"></div>
            <p>{memo.content}</p>

            <div className="flex justify-end mt-2">
              <div>
                <img
                  src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
                  alt="카카오링크 보내기 버튼"
                />
              </div>
            </div>

            {userId !== memo.user_id ? (
              <div className="flex justify-end">
                <a href="#report" className="link-hover text-xs pt-5 text-error">
                  신고하기
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {userId === memo.user_id ? (
        <div className="flex justify-center mt-5 mx-5">
          <div className="flex justify-end xl:w-6/12 lg:w-6/12 md:w-8/12 w-full">
            <div onClick={() => navigate("/my/create", { state: { data: memo } })} className="btn">
              수정
            </div>
            <div
              onClick={() => navigate("/my/delete", { state: { seq: memo.seq } })}
              className="btn btn-error ml-2">
              삭제
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {commentData.length > 0 ? <MemoComment data={commentData} /> : <></>}
    </>
  );
};

export default MemoDetail;
