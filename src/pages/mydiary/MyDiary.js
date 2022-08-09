import BasicTemplate from "../../components/templates/BasicTemplate";
import { BrowserRouter, useNavigate } from "react-router-dom";
import MemoList from "../../components/common/MemoList";
import MyButton from "../../components/common/MyButton";

const MyDiary = () => {
  const navigate = useNavigate();

  return (
    <BasicTemplate
      Content={() => {
        return (
          <div className="MyDiary" class="container mx-auto w-full p-5">
            <div class="card shadow-lg w-full h-full break-all">
              <div
                className="container"
                class="card-body bg-primary h-72 xl:p-20 lg:p-20 sm:p-20 p-10"
              >
                <h2 class="card-title">nana의 일기장</h2>
                <p>안녕하세요 나나입니다</p>
              </div>
            </div>

            <div class="container mx-auto flex flex-wrap justify-end mt-10">
              <a
                href="/memowrite"
                class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md"
              >
                <i class="fa-solid fa-pencil"></i>&nbsp;일기 쓰기
              </a>
              <a
                href="/mypost_comment/"
                class="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-md mx-2"
              >
                <i class="fa-solid fa-comment"></i>&nbsp;내가 받은 댓글
              </a>
              <a
                href="/mycomment/"
                class="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md"
              >
                <i class="fa-solid fa-hand-holding-heart"></i>&nbsp;내가 쓴 댓글
              </a>
            </div>
            <br />
            <h3>메모리스트</h3>
          </div>
        );
      }}
    />
  );
};

export default MyDiary;
