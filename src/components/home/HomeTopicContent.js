import React, { useEffect, useState } from "react";

const HomeTopicContent = () => {
  const [endCheck, setEndCheck] = useState(false);

  const videoEndEvent = () => {
    setEndCheck(true);
  };

  return (
    <>
      <div className="w-screen flex justify-center items-center mb-10 bg">
        <video autoPlay muted onEnded={() => videoEndEvent()} className="tossteam-react__video">
          <source src={"/video/backVideo.mp4"} type="video/mp4" />
        </video>
        <div className={`px-10 text ${endCheck ? "fade-in" : "display-none"} `}>
          <h1 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl text-lg text-accent text-center bg-title">
            세상에서 가장 재미있는 일기쓰기
          </h1>
          <div className="text-center mt-10">
            <a href="/topic/" className="btn btn-primary btn-lg">
              재미있는 일기 주제 살펴보기
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTopicContent;
