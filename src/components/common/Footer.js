import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-10 footer bg-primary text-accent footer-center">
        <div className="grid grid-flow-col gap-4">
          <a href="/intro/" className="link link-hover">
            소개
          </a>
          <a href="/notice/" className="link link-hover">
            공지사항
          </a>
          <a href="/qna/" className="link link-hover">
            자주 묻는 질문
          </a>
          <a href="/contact/" className="link link-hover">
            문의/제안
          </a>
        </div>

        <div>
          <p>Copyright © 2022 - All right reserved by Classbinu</p>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Footer);
