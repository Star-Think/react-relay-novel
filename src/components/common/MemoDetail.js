import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MemoComment from "./MemoComment";
import store from "../../store";
import MemoReprotModal from "./MemoReprotModal";

const MemoDetail = ({ memo }) => {
  const navigate = useNavigate();
  const [commentData, setCommentData] = useState([]);
  const [modal, setModal] = useState(false);
  const [userId, setUserId] = useState("");
  const token = localStorage.getItem("access_token");
  const memoSeq = memo.seq;
  const getData = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_DB_HOST + "/api/diaryDetail",
        { seq: memoSeq, user_id: memo.user_id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = response.data.data.clist;
      setCommentData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (memo.seq) {
      getData();
      setUserId(store.getState().user.userInfo.user_id);
    }
  }, [memo]);

  return (
    <>
      <div className="flex justify-center mt-5 mx-5" style={{ marginTop: "100px" }}>
        <div className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full h-full card shadow-lg break-all min-h-screen">
          <div className="card-body bg-white lg:p-24">
            <div className="flex justify-between mb-10">
              <div className="badge badge-primary">
                {memo.type === "0" ? "모두 공개" : "비공개"}
              </div>
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
                  className="link-hover link-secondary"
                  style={{ cursor: "pointer" }}>
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
                <button
                  className="link-hover text-xs pt-5 text-error"
                  onClick={() => setModal(true)}>
                  신고하기
                </button>
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
      {modal && (
        <MemoReprotModal reportId={"report"} content={"일기"} memo={memo} setModal={setModal} />
      )}
    </>
  );
};

export default MemoDetail;
