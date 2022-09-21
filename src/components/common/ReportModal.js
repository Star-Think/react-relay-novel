import React, { useEffect, useState } from "react";
import axios from "axios";

const ReportModal = ({ modalType, blockId }) => {
  const token = localStorage.getItem("access_token");

  const [content, setContent] = useState({
    title: "",
    pContent: "",
    btnText: "",
    url: "",
    param: {},
    reportContent: "",
  });

  const { title, pContent, btnText, url, param, reportContent } = content;

  const handleChangeState = (e) => {
    setContent({
      ...content,
      param: { content: e.target.value, user_id: blockId },
    });
  };

  const setInfo = () => {
    switch (modalType) {
      case "report":
        setContent({
          title: "신고하기",
          pContent:
            "부적절한 회원인가요? 의견을 주시면 꼼꼼하게 검토하겠습니다 처리 결과는 별도 안내드리지 않습니다.",
          btnText: "신고",
          url: "star/api/reportAdd",
        });
        break;
      case "block":
        setContent({
          title: "차단하기",
          pContent: `'${blockId}'을(를) 차단하시겠습니까? 차단한 회원의 게시글과 댓글은 보이지 않습니다.`,
          btnText: "차단",
          url: "/star/api/blockUserAdd",
          param: { block_id: blockId },
        });
        break;
    }
  };

  const setData = async () => {
    try {
      const response = await axios.post(url, param, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.sucess) {
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    const modalWrap = document.querySelector(".modal");
    modalWrap.classList.remove("modal-open");
    setContent({
      ...content,
      reportContent: "",
    });
  };

  useEffect(() => {
    setInfo(modalType);
  }, [modalType]);

  return (
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-error text-center">{title}</h3>
        <p className="py-4 text-center">{pContent}</p>
        <div>
          {modalType === "report" && (
            <textarea
              className="textarea textarea-primary"
              style={{ width: "100%" }}
              type="text"
              name="reportContent"
              maxLength="2000"
              id="id_content"
              placeholder="신고 이유를 적어주세요."
              onChange={handleChangeState}
              value={reportContent}></textarea>
          )}
          <div className="flex justify-end">
            <div
              onClick={() => {
                closeModal();
              }}
              className="btn btn-outline btn">
              취소
            </div>
            <div
              onClick={() => {
                setData();
              }}
              className="btn btn-error ml-2">
              {btnText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
