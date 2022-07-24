import React from "react";
import { timeChange } from "../../utils/CommonFun";
import MemoComment from "./MemoComment";

const MemoDetail = ({ memo }) => {
  return (
    <>
      <div className="flex justify-center mt-5 mx-5">
        <div className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full h-full card shadow-lg break-all">
          <div className="card-body bg-white lg:p-24">
            <div className="flex justify-between mb-10">
              <div className="badge badge-primary">
                {memo.type === 0 ? "모두 공개" : "비공개"}
              </div>
            </div>

            <h2 className="card-title text-center mb-20">{memo.title}</h2>
            <div className="flex justify-between">
              <div>
                <a
                  href="/diary/ipurpleyou/"
                  className="link-hover link-secondary"
                >
                  {memo.user_name}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  {" "}
                  {timeChange(memo.date)}
                </p>
                <p className="text-sm text-gray-500 text-right">
                  조회수 {memo.views}
                </p>
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

      <MemoComment />
    </>
  );
};

export default MemoDetail;
