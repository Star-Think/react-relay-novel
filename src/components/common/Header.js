import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_USERINFO } from "../../actions/ActionTypes";
import store from "../../store";
import { decrypt } from "../../utils/CryptoJsMake";

const Header = () => {
  const [menuShow, setMenuShow] = useState(true);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setMenuShow(true);
    }
  });

  useEffect(() => {
    if (localStorage.getItem("user_info") !== null) {
      setUserInfo(JSON.parse(decrypt(localStorage.getItem("user_info"))));
    }
  }, []);

  window.onresize = () => {
    if (window.innerWidth >= 1024) {
      setMenuShow(true);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUserInfo(null);
    store.dispatch({
      type: ADD_USERINFO,
      data: {},
    });
    navigate("/");
  };

  return (
    <>
      <div className="navbar mb-0 shadow-lg bg-neutral text-neutral-content menu-fixed">
        <div className="flex-none px-2 mx-2">
          <div onClick={() => navigate("/")} className=" btn text-2xl font-bold">
            오늘의 일기장
          </div>
        </div>

        <div className="flex-1 px-2 mx-2 navbar-end">
          <div className="items-stretch hidden lg:flex">
            <div onClick={() => navigate("/my")} className="btn btn-ghost btn-sm rounded-btn">
              내 일기장
            </div>
            <div
              onClick={() => navigate("/everydiary/1")}
              className="btn btn-ghost btn-sm rounded-btn">
              모두의 일기장
            </div>
            {!store.getState().user.userInfo.nickname ? (
              <div onClick={() => navigate("/signup")} className="btn btn-ghost btn-sm rounded-btn">
                회원가입
              </div>
            ) : (
              <div onClick={() => navigate("/mypage")} className="btn btn-ghost btn-sm rounded-btn">
                {store.getState().user.userInfo.user_id}의 마이페이지
              </div>
            )}
            {!store.getState().user.userInfo.nickname ? (
              <div onClick={() => navigate("/login")} className="btn btn-ghost btn-sm rounded-btn">
                로그인
              </div>
            ) : (
              <div onClick={() => logout()} className="btn btn-ghost btn-sm rounded-btn">
                로그아웃
              </div>
            )}
            {store.getState().user.userInfo.role === "ROLE_ADMIN" ? (
              <div
                onClick={() => navigate("/admin/diary")}
                className="btn btn-ghost btn-sm rounded-btn">
                관리자
              </div>
            ) : null}
          </div>
          <div
            id="burgerButton"
            className="flex-none xl:hidden lg:hidden "
            onClick={() => setMenuShow(!menuShow)}>
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="burgerMenu"
        className={`flex justify-end z-10 ${menuShow ? "hidden" : ""} sub-menu-fixed`}>
        <ul className="menu bg-neutral text-neutral-content w-screen">
          <div onClick={() => navigate("/my")} className="btn btn-ghost">
            내 일기장
          </div>

          <div onClick={() => navigate("/everydiary/1")} className="btn btn-ghost">
            모두의 일기장
          </div>

          {!store.getState().user.userInfo.nickname ? (
            <div onClick={() => navigate("/signup")} className="btn btn-ghost">
              회원가입
            </div>
          ) : (
            <div onClick={() => navigate("/mypage")} className="btn btn-ghost">
              {store.getState().user.userInfo.user_id}의 마이페이지
            </div>
          )}
          {!store.getState().user.userInfo.nickname ? (
            <div onClick={() => navigate("/login")} className="btn btn-ghost">
              로그인
            </div>
          ) : (
            <div onClick={() => logout()} className="btn btn-ghost">
              로그아웃
            </div>
          )}

          {store.getState().user.userInfo.role === "ROLE_ADMIN" ? (
            <div
              onClick={() => navigate("/admin/diary")}
              className="btn btn-ghost btn-sm rounded-btn">
              관리자
            </div>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default React.memo(Header);
