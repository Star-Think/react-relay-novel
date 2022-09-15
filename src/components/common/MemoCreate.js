import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";

const MemoCreate = () => {
  const location = useLocation();
  const locationData = location.state && location.state.data ? location.state.data : "";
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [isEdit, setIsEdit] = useState(false);
  const [state, setState] = useState({
    isPublic: "0",
    title: "",
    content: "",
  });

  const options = [
    { key: "0", value: "모두 공개" },
    { key: "1", value: "비공개" },
  ];
  const { isPublic, title, content } = state;

  const handleChangeState = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setData();
    setState({
      isPublic: 0,
      title: "",
      content: "",
    });
  };

  const setData = async () => {
    try {
      const url = isEdit ? "/star/api/diaryUpdate" : "/star/api/diaryAdd";
      const params = isEdit
        ? {
            seq: locationData.seq,
            title: state.title,
            content: state.content,
            type: isPublic,
            user_id: locationData.user_id,
          }
        : {
            title: state.title,
            content: state.content,
            type: isPublic,
          };
      const response = await axios.post(url, params, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/my");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (locationData) {
      setIsEdit(true);
      setState({
        isPublic: locationData.type,
        title: locationData.title,
        content: locationData.content,
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center mt-10" style={{ marginTop: "150px" }}>
        <div className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-full mx-5">
          <div className="flex justify-end">
            <div
              id="id_postPublicTooltip"
              className="tooltip tooltip-open tooltip-top tooltip-info"
              data-tip="누구나 일기를 읽을 수 있어요.">
              <p>
                <select
                  name="isPublic"
                  className="select select-bordered select-primary w-full max-w-xs"
                  id="id_public"
                  onChange={handleChangeState}
                  value={isPublic}>
                  {options.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </p>
            </div>
          </div>
          <p>
            <input
              type="text"
              name="title"
              className="input input-primary input-bordered my-2"
              placeholder="제목"
              style={{ width: "100%" }}
              maxLength="40"
              autoComplete="off"
              id="id_title"
              required
              onChange={handleChangeState}
              value={title}
            />
          </p>
          <p>
            <textarea
              name="content"
              className="input input-primary input-bordered my-2"
              placeholder="내용"
              style={{ width: "100%", height: "400px" }}
              required
              id="id_content"
              onChange={handleChangeState}
              value={content}
            />
          </p>
          <div className="flex justify-end">
            <div onClick={handleSubmit} className="btn btn-primary">
              저장
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemoCreate;
