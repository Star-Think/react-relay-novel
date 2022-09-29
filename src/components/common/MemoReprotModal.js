import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemoReprotModal = ({ reportId, content, memo }) => {
  const navigate = useNavigate();
  const [reportContent, setReportContent] = useState("");

  const handleChangeReportContent = (e) => {
    setReportContent(e.target.value);

    console.log(memo);
  };

  const handleClickReportButton = () => {
    const token = localStorage.getItem("access_token");

    const getData = async () => {
      try {
        const response = await axios.post(
          "/star/api/diaryDetail",
          { report_seq: reportId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = response.data.data.clist;
      } catch (error) {
        console.error(error);
      }
    };
  };

  return (
    <div
      className="modal-open fixed w-screen h-screen bg-black bg-opacity-30 inset-0"
      id={reportId}>
      <div className="modal-box m-auto my-72">
        <h3 className="font-bold text-lg text-error text-center">신고하기</h3>
        <p className="py-4 text-center">
          부적절한 {content === "일기" ? `${content}를` : `${content}을`} 발견하셨나요?
          <br />
          의견을 주시면 꼼꼼하게 검토하겠습니다.
          <br />
          처리 결과는 별도 안내드리지 않습니다.
        </p>

        <textarea
          onChange={handleChangeReportContent}
          className="textarea textarea-primary"
          style={{ width: "100%" }}
          type="text"
          name="content"
          autoFocus
          maxLength={2000}
          required
          placeholder={`이 ${content}에 대한 의견을 적어주세요.`}></textarea>
        <div className="flex justify-end">
          <div onClick={() => navigate(-1)} className="btn btn-outline btn-error">
            취소
          </div>
          <button type="submit" id="reportBtn" className="btn btn-error ml-2">
            신고
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoReprotModal;
