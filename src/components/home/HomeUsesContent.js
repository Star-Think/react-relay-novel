import React, { useEffect } from "react";
import AOS from "aos";
const HomeUsesContent = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className="text-center mb-10 mt-10">
        <p className="text-2xl text-warning">오늘의 일기, 이렇게 활용하세요</p>
      </div>

      <div className="flex flex-wrap justify-center w-screen bg-primary h-auto py-10">
        <div className="xl:w-1/5 md:w-1/2 w-full p-5">
          <div className="card shadow-lg w-full h-full break-all">
            <div className="card-body bg-white">
              <h2 className="card-title text-center text-6xl text-success">
                <i className="fa-solid fa-school"></i>
              </h2>
              <h2 className="card-title text-center">학교 선생님</h2>
              <p className="text-center my-2">-</p>
              <p className="text-justify">
                아직도 일일이 글쓰기 공책을 걷어으시나요? 이제 온라인으로 우리반
                일기장을 만들어 학생들의 글을 모아보세요. 선생님이 달아주는
                댓글에 학생들은 글쓰기에 흥미를 느낀답니다. 학교 선생님은 초중고
                학급과 동아리를 개설할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/5 md:w-1/2 w-full p-5">
          <div className="card shadow-lg w-full h-full break-all">
            <div className="card-body bg-white">
              <h2 className="card-title text-center text-6xl text-error">
                <i className="fa-solid fa-pencil"></i>
              </h2>
              <h2 className="card-title text-center">글쓰기를 좋아하는 학생</h2>
              <p className="text-center my-2">-</p>
              <p className="text-justify">
                어떤 주제로 글을 써야 할지 고민인가요? 오늘의 일기에서 알려주는
                재미있는 주제로 글쓰기를 해 보세요. 그리고 다른 친구들과 착한
                댓글을 주고 받아보세요. 글쓰기가 더 재미있어집니다!
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/5 md:w-1/3 w-full p-5">
          <div className="card shadow-lg w-full h-full break-all">
            <div className="card-body bg-white">
              <h2 className="card-title text-center text-6xl text-info">
                <i className="fa-solid fa-book-open-reader"></i>
              </h2>
              <h2 className="card-title text-center">
                일기장 관리가 어려운 누구나
              </h2>
              <p className="text-center my-2">-</p>
              <p className="text-justify">
                꾸준히 일기를 쓰고 싶은데 관리가 너무 어렵나요? 이제부터 일기는
                온라인 일기장에 써 보세요. 공개 일기는 다른 사람과 생각을 나눌
                수 있고요, 비공개 일기는 나만 읽을 수 있답니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeUsesContent;
