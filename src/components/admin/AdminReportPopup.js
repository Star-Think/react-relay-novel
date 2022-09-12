import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDiaryPopup = ({ modalId, title, content, reportSeq, reportData, getData }) => {
  const navigate = useNavigate();

  const reportApp = async (report_seq, state, type) => {
    if (window.confirm("신고처리 하시겠습니까?")) {
      return await axios({
        method: "post",
        url: "/star/api/reportCompletion",
        data: {
          seq: report_seq,
          keyword: state,
          type: type,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }).then((res) => {
        getData();
        navigate(-1);
      });
    }
  };

  return (
    <div className="modal" id={reportData.report_seq}>
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
        {reportData.title !== null ? (
          <h3 className="font-bold text-lg">{reportData.title}</h3>
        ) : reportData.nickname !== null ? (
          <h3 className="font-bold text-lg">{reportData.nickname}</h3>
        ) : null}
        {reportData.self !== null ? (
          <p className="py-4">{reportData.self}</p>
        ) : (
          <p className="py-4">{reportData.content}</p>
        )}
        {reportData.state === "0" ? (
          <div className="modal-action flex justify-between">
            <div
              onClick={() => reportApp(reportData.report_seq, "2", reportData.type)}
              className="btn btn-outline">
              신고반려
            </div>
            <div
              onClick={() => reportApp(reportData.report_seq, "1", reportData.type)}
              className="btn btn-error">
              신고승인
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AdminDiaryPopup;
