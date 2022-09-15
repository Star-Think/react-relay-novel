import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";

const CommentEdit = () => {
  const token = localStorage.getItem("access_token");
  const location = useLocation();
  const navigate = useNavigate();
  const locationData = location.state && location.state.data ? location.state.data : "";
  const options = [
    { key: "0", value: "모두 공개" },
    { key: "1", value: "비공개" },
  ];

  const [state, setState] = useState({
    isPublic: "0",
    content: "",
  });
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
      content: "",
    });
  };

  const setData = async () => {
    try {
      const response = await axios.post(
        "/star/api/commentUpdate",
        {
          seq: locationData.seq,
          content: state.content,
          type: state.isPublic,
          user_id: locationData.user_id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/my");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (locationData) {
      setState({
        isPublic: locationData.type,
        content: locationData.content,
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center my-20" style={{ marginTop: "150px" }}>
        <div className="lg:w-1/2 md:w-3/5 sm:w-4/5 w-4/5">
          <div className="flex justify-center">
            <textarea
              name="content"
              className="textarea h-36 textarea-bordered textarea-primary"
              style={{ width: "100%" }}
              maxLength="180"
              required
              id="id_content"
              onChange={handleChangeState}
              value={content}>
              댓글
            </textarea>
            <select
              name="isPublic"
              className="select select-bordered select-primary max-w-xs mx-2"
              id="id_public"
              onChange={handleChangeState}
              value={isPublic}>
              {options.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            <div onClick={handleSubmit} className="btn">
              수정
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommentEdit;
