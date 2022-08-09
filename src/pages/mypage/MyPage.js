import BasicTemplate from "../../components/templates/BasicTemplate";
import React, { useState } from "react";

const MyPage = () => {
  const [nickname, setNickname] = useState("별명");

  const [state, setState] = useState({
    nickname: "별명",
    introduction: "자기소개",
    email: "이메일",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <BasicTemplate
      Content={() => {
        return (
          <div className="MyPage" class="flex justify-center mt-20">
            <form class="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12">
              <span class="label-text">닉네임</span>
              <input
                class="input input-primary input-bordered my-2"
                name="nickname"
                value={state.nickname}
                onChange={handleChangeState}
              />

              <h2>자기소개</h2>
              <textarea
                class="textarea h-36 textarea-bordered textarea-primary"
                name="introduction"
                value={state.introduction}
                onChange={handleChangeState}
              />
              <span class="label-text">이메일</span>
              <input
                class="input input-primary input-bordered my-2"
                name="email"
                value={state.email}
                onChange={handleChangeState}
              />
              <div class="flex justify-end">
                <button
                  class="btn btn-primary btn-block"
                  onClick={() => alert("변경하시겠습니까?")}
                >
                  변경하기
                </button>
              </div>

              <div class="flex justify-center mt-10">
                <a href="/blacklist/" class="text-xs link-hover">
                  차단 회원 관리
                </a>
              </div>

              <div class="flex justify-center mt-10">
                <a href="/password_change/" class="mr-10 link-hover">
                  비밀번호 변경
                </a>
                <a href="/dropout/" class="ml-10 text-error link-hover">
                  회원 탈퇴
                </a>
              </div>
            </form>
          </div>
        );
      }}
    />
  );
};

export default MyPage;
