import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";

const MemoDelete = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const location = useLocation();
  const { seq, storySeq } = location.state;
  const isComment = location.pathname.includes("comment");

  const handleDelete = () => {
    deleteData();
  };

  const deleteData = async () => {
    try {
      const url = isComment ? "/star/api/commentDelete" : "/star/api/diaryDelete";
      const response = await axios.post(
        url,
        { seq: seq },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (isComment) {
        navigate(`/everydiary/detail/${storySeq}`);
      } else {
        navigate("/my");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 mb-20 mx-10">
        <div>
          <h3 className="text-4xl text-error text-center mb-10">꼭 읽어주세요.</h3>
          <ul className="text-lg">
            {isComment ? (
              <li>- 삭제된 댓글은 절대 복구할 수 없습니다.</li>
            ) : (
              <>
                <li>- 삭제된 일기는 절대 복구할 수 없습니다.</li>
                <li>- 일기에 달린 댓글도 함께 삭제됩니다.</li>
              </>
            )}
          </ul>
        </div>
      </div>
      `<div className="flex justify-center text-3xl mb-10">정말 삭제하시겠습니까?</div>
      <div className="flex justify-center">
        <div onClick={() => navigate(-1)} className="btn mr-10">
          취소
        </div>
        <div onClick={handleDelete} className="btn btn-error ml-10">
          삭제
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemoDelete;
