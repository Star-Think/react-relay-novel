import React from "react";
import { useNavigate } from "react-router-dom";

const MemoReprotModal = ({ reportId, content }) => {
  const navigate = useNavigate();
  return (
    <div className="modal" id={reportId}>
      <div className="modal-box">
        <h3 className="font-bold text-lg text-error text-center">신고하기</h3>
        <p className="py-4 text-center">
          부적절한 {content === "일기" ? `${content}를` : `${content}을`}{" "}
          발견하셨나요?
          <br />
          의견을 주시면 꼼꼼하게 검토하겠습니다.
          <br />
          처리 결과는 별도 안내드리지 않습니다.
        </p>

        <textarea
          className="textarea textarea-primary"
          style={{ width: "100%" }}
          type="text"
          name="content"
          autoFocus
          maxLength={2000}
          required
          placeholder={`이 ${content}에 대한 의견을 적어주세요.`}
        ></textarea>
        <div className="flex justify-end">
          <div
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-error"
          >
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
