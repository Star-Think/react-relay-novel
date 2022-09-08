import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDiaryPopup = ({ modalId, title, content, reportSeq }) => {
  const navigate = useNavigate();
  return (
    <div className="modal" id={modalId}>
      <div className="modal-box">
        <div className="flex justify-end">
          <div onClick={() => navigate(-1)} className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        {title !== null ? <h3 className="font-bold text-lg">{title}</h3> : null}
        <p className="py-4">{content}</p>
        <div className="modal-action flex justify-between">
          <div onClick={() => navigate(-1)} className="btn btn-outline">
            신고반려
          </div>
          <div onClick={() => navigate(-1)} className="btn btn-error">
            신고승인
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDiaryPopup;
