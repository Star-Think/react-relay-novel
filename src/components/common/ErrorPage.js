import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => {
  const padding = {
    paddingTop: "80px",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("access_token");
  const blockId = location.state && location.state.blockId ? location.state.blockId : "";
  console.log(blockId);
  const unBlockClick = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_DB_HOST + "/api/blockUserDelete",
        { block_id: blockId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        navigate("/mypage/blacklist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex my-20 justify-center" style={padding}>
        <div className="p-10 bg-white rounded-md shadow-xl xl:w-4/12 lg:w-6/12 w-10/12">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-primary text-9xl">403</h1>

            <h6 className="mb-2 text-xl font-bold text-center text-gray-800 md:text-2xl">
              <span className="text-red-500">차단된 페이지입니다 :(</span>
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              차단한 회원의 일기장과 게시글에 접근할 수 없습니다.
            </p>

            <div>
              <div className="flex justify-end">
                <div onClick={() => navigate("/")} className="btn btn-primary">
                  처음으로
                </div>
                {blockId && (
                  <div
                    onClick={() => {
                      unBlockClick();
                    }}
                    id="blockedBtn"
                    className="btn btn-success ml-2">
                    차단 해제
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
