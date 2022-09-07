import React from "react";
import { useNavigate } from "react-router-dom";
import AdminTop from "../../components/admin/AdminTop";
import ButtonItem from "../../components/common/ButtonItem";
import BasicTemplate from "../../components/templates/BasicTemplate";

const AdminDiary = () => {
  const navigate = useNavigate();
  return (
    <BasicTemplate
      Content={() => {
        return (
          <>
            <div className="container mx-auto w-full p-5" style={{ marginTop: "100px" }}>
              <AdminTop />

              <div className="container mx-auto flex flex-wrap justify-end mt-10">
                <ButtonItem text={"신고 일기"} btnColor={"btn-primary"} btnIcon={"fa-pencil"} />
                <ButtonItem
                  text={"신고 댓글"}
                  btnColor={"btn-warning"}
                  btnIcon={"fa-comment"}
                  mx_2={"mx-2"}
                />

                <ButtonItem text={"신고 회원"} btnColor={"btn-info"} btnIcon={"fa-user"} />
              </div>
            </div>
            <div className="container mx-auto flex flex-wrap justify-start">
              <div className="lg:w-1/4 md:w-1/2 w-full p-5" style={{ maxHeight: "300px" }}>
                <a href="#3">
                  <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
                    <div className="card-body h-72 bg-white">
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-500 text-right">별생각</p>

                        <div>
                          <p className="text-right text-sm text-gray-500">2022. 07. 26. 화요일</p>
                        </div>
                      </div>
                      <div className="divider my-0"></div>
                      <div className="text-clip overflow-hidden">
                        <p>글이 이상해요 신고해요</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="lg:w-1/4 md:w-1/2 w-full p-5" style={{ maxHeight: "300px" }}>
                <a href="/post/9978/">
                  <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
                    <div className="card-body h-72 bg-white">
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-500 text-right">별생각</p>

                        <div>
                          <p className="text-right text-sm text-gray-500">2022. 07. 26. 화요일</p>
                        </div>
                      </div>
                      <div className="divider my-0"></div>
                      <div className="text-clip overflow-hidden">
                        <p>글이 이상해요 신고해요2</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="modal" id="3">
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
                <h3 className="font-bold text-lg">이상한글</h3>
                <p className="py-4">
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                  이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글 이상한글
                </p>
                <div className="modal-action flex justify-between">
                  <a href="/post/3/" className="btn btn-outline">
                    신고반려
                  </a>
                  <div onClick={() => navigate(-1)} className="btn btn-error">
                    신고승인
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

export default AdminDiary;
