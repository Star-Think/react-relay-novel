import React, { useEffect, useState } from "react";
import axios from "axios";
import MemoComment from "./MemoComment";

const MemoDetail = ({ memo }) => {
  const [commentData, setCommentData] = useState([]);
  const token = localStorage.getItem("access_token");
  const memoSeq = memo.seq;
  const getData = async () => {
    try {
      const response = await axios.post(
        "/star/api/diaryDetail",
        { seq: memoSeq },
        { headers: { Authorization: `Bearer ${token}` } }
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
  }, [memo.seq]);

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
                <a href="/diary/ipurpleyou/" className="link-hover link-secondary">
                  {memo.nickname}
                </a>
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

            <div className="flex justify-end">
              <a href="#report" className="link-hover text-xs pt-5 text-error">
                신고하기
              </a>
            </div>
          </div>
        </div>
      </div>
      {commentData.length > 0 ? <MemoComment data={commentData} /> : <></>}
    </>
  );
};

export default MemoDetail;
