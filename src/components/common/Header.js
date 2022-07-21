import React, { useEffect, useState } from "react";

const Header = () => {
  const [menuShow, setMenuShow] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setMenuShow(true);
    }
  });

  window.onresize = () => {
    if (window.innerWidth >= 1024) {
      setMenuShow(true);
    }
  };

  return (
    <>
      <div className="navbar mb-0 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none px-2 mx-2">
          <a href="/" className="text-2xl font-bold">
            오늘의 메모
          </a>
        </div>

        <div className="flex-1 px-2 mx-2 navbar-end">
          <div className="items-stretch hidden lg:flex">
            <a href="/classroom/" className="btn btn-ghost btn-sm rounded-btn">
              내 메모
            </a>
            <a href="/everydiary/" className="btn btn-ghost btn-sm rounded-btn">
              모두의 메모
            </a>
            <a href="/mydiary/" className="btn btn-ghost btn-sm rounded-btn">
              릴레이 소설
            </a>
            <a href="/signup/" className="btn btn-ghost btn-sm rounded-btn">
              회원가입
            </a>
            <a href="/login/" className="btn btn-ghost btn-sm rounded-btn">
              로그인
            </a>
          </div>
          <div
            id="burgerButton"
            className="flex-none xl:hidden lg:hidden"
            onClick={() => setMenuShow(!menuShow)}
          >
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="burgerMenu"
        className={`flex justify-end z-10 ${menuShow ? "hidden" : ""} `}
      >
        <ul className="menu bg-neutral text-neutral-content w-screen">
          <a href="/topic/" className="btn btn-ghost">
            재미있는 일기 주제
          </a>

          <a href="/mydiary/" className="btn btn-ghost">
            내 일기장
          </a>
          <a href="/classroom/" className="btn btn-ghost">
            우리반 일기장
          </a>
          <a href="/everydiary/" className="btn btn-ghost">
            모두의 일기장
          </a>
          <a href="/login/" className="btn btn-ghost">
            마이페이지
          </a>
          <a href="/login/" className="btn btn-ghost">
            로그아웃
          </a>

          <a href="/signup/" className="btn btn-ghost">
            회원가입
          </a>
          <a href="/login/" className="btn btn-ghost">
            로그인
          </a>
        </ul>
      </div>
    </>
  );
};

export default Header;
