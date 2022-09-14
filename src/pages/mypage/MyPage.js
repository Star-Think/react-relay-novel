import BasicTemplate from "../../components/templates/BasicTemplate";
import React, { useState } from "react";
import store from "../../store";

const MyPage = () => {
  const marginTop = {
    marginTop: '180px'
  }
  const width100 = {
    width: '100%'
  }
  const [nickname, setNickname] = useState("별명");

  const [state, setState] = useState({
    nickname: store.getState().user.userInfo.nickname,
    introduction: "",
    email: "",
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
          <div className="flex justify-center mt-20" style={marginTop}>
             {/* MyPage */}
            <form className="xl:w-2/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12">
              <div className="label-text">닉네임</div>
              <input
                style={width100}
                className="input input-primary input-bordered my-2"
                name="nickname"
                value={state.nickname}
                onChange={handleChangeState}
              />

              <h2>자기소개</h2>
              <textarea
                style={width100}
                className="textarea h-36 textarea-bordered textarea-primary"
                name="introduction"
                value={state.introduction}
                onChange={handleChangeState}
                placeholder="자기소개"
              />
              <div className="label-text">이메일</div>
              <input
                style={width100}
                className="input input-primary input-bordered my-2"
                name="email"
                value={state.email}
                onChange={handleChangeState}
                placeholder="이메일"
              />
              <div className="flex justify-end">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => alert("변경하시겠습니까?")}
                >
                  변경하기
                </button>
              </div>

              <div className="flex justify-center mt-10">
                <a href="/blacklist/" className="text-xs link-hover">
                  차단 회원 관리
                </a>
              </div>

              <div className="flex justify-center mt-10">
                <a href="/password_change/" className="mr-10 link-hover">
                  비밀번호 변경
                </a>
                <a href="/dropout/" className="ml-10 text-error link-hover">
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
