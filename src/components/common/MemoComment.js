import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import store from "../../store";
import { timeChange } from "../../utils/CommonFun";
import MemoReprotModal from "./MemoReprotModal";

const MemoComment = ({ data }) => {
  const [userId, setUserId] = useState("");
  const [updateMode, setUpdateMode] = useState([{ seq: -1, mode: false }]);
  const [commentData, setCommentData] = useState({ comment: "", hidden: 1 });
  const [modal, setModal] = useState(false);
  const [reportComment, setReportComment] = useState(null);
  useEffect(() => {
    setUserId(store.getState().user.userInfo.user_id);
  }, []);
  const navigate = useNavigate();

  const handleClickDeleteButton = async (seq) => {
    const token = localStorage.getItem("access_token");

    try {
      await axios.post(
        "/star/api/commentDelete",
        { seq: seq },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeComment = (e) => {
    setCommentData({ ...commentData, comment: e.target.value });
  };

  const handleChangeHidden = (e) => {
    const hiddenName = e.target.value;

    if (hiddenName === "private") {
      setCommentData({ ...commentData, hidden: 1 });
    } else {
      setCommentData({ ...commentData, hidden: 0 });
    }
  };

  const handleClickUpdateButton = async ({ seq, user_id }) => {
    const token = localStorage.getItem("access_token");

    try {
      await axios.post(
        "/star/api/commentUpdate",
        {
          seq: seq,
          content: commentData.comment,
          type: commentData.hidden,
          user_id: user_id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setUpdateMode({ ...updateMode, seq: seq, mode: false });
    }
  };
  const handleClickCancelUpdateButton = ({ seq }) => {
    setUpdateMode({ ...updateMode, seq: seq, mode: false });
  };

  const handleClickReportButton = (comment) => {
    setModal(true);
    setReportComment(comment);
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full divide-y divide-solid bg-white p-5 rounded-3xl">
          {data.map((comment) => {
            return (
              <div key={comment.seq} className="flex justify-between lg:px-5 lg:px-10 py-5">
                {updateMode.seq === comment.seq && updateMode.mode ? (
                  <React.Fragment key={comment.seq}>
                    <textarea
                      onChange={handleChangeComment}
                      defaultValue={comment.content}
                      name="content"
                      required
                      id="id_content"
                      placeholder="착한 댓글을 달아주세요."
                      maxLength={180}
                      className="textarea h-36 textarea-bordered textarea-primary"
                      style={{ width: "100%" }}></textarea>
                    <select
                      onChange={handleChangeHidden}
                      name="public"
                      required
                      id="id_public"
                      className="select select-bordered select-primary max-w-xs ml-2">
                      <option value="public">공개</option>
                      <option value="private">비공개</option>
                    </select>
                    <button
                      type="submit"
                      className="btn btn-primary ml-2"
                      onClick={() =>
                        handleClickUpdateButton({ seq: comment.seq, user_id: comment.user_id })
                      }>
                      저장
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary ml-2"
                      onClick={() => handleClickCancelUpdateButton(comment.seq)}>
                      취소
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={comment.seq}>
                    <div className="w-4/6">{comment.content}</div>
                    <div className="text-right">
                      <div>
                        <div
                          onClick={() =>
                            navigate(`/my/${comment.user_id}`, {
                              state: { viewId: comment.user_id, nickName: comment.nickname },
                            })
                          }
                          className="link-hover link-secondary"
                          style={{ cursor: "pointer" }}>
                          {comment.nickname}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          {timeChange(comment.create_date)}
                        </p>
                      </div>

                      {comment.user_id !== userId ? (
                        <button
                          onClick={() => handleClickReportButton(comment)}
                          className="link-hover text-xs pt-5 text-error">
                          신고하기
                        </button>
                      ) : (
                        <div className="flex justify-center mt-5 mx-5 w-full">
                          <div className="flex justify-end w-full">
                            <div
                              className="btn"
                              onClick={() =>
                                setUpdateMode({ ...updateMode, seq: comment.seq, mode: true })
                              }>
                              수정
                            </div>
                            <div
                              className="btn btn-error ml-2"
                              onClick={() => handleClickDeleteButton(comment.seq)}>
                              삭제
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {modal && <MemoReprotModal reportId={"report2"} content={"댓글"} memo={reportComment} />}
    </>
  );
};

export default MemoComment;
