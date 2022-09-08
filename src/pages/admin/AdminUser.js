import React from "react";
import { useNavigate } from "react-router-dom";
import AdminReportItem from "../../components/admin/AdminReportItem";
import AdminReportPopup from "../../components/admin/AdminReportPopup";
import AdminTemplate from "../../components/templates/AdminTemplate";

const AdminUser = () => {
  const navigate = useNavigate();
  return (
    <AdminTemplate
      Content={() => {
        return (
          <>
            <AdminReportItem
              seq={"3"}
              nickname={"별생각3"}
              date={"2022. 07. 26. 화요일"}
              content={"글이 이상해요 신고해요"}
            />
            <AdminReportItem
              nickname={"별생각"}
              date={"2022. 07. 26. 화요일"}
              content={"글이 이상해요 신고해요"}
            />
            <AdminReportItem
              nickname={"별생각"}
              date={"2022. 07. 26. 화요일"}
              content={"글이 이상해요 신고해요"}
            />
            <AdminReportItem
              nickname={"별생각"}
              date={"2022. 07. 26. 화요일"}
              content={"글이 이상해요 신고해요"}
            />
            <AdminReportItem
              nickname={"별생각"}
              date={"2022. 07. 26. 화요일"}
              content={"글이 이상해요 신고해요"}
            />
            <AdminReportItem
              nickname={"별생각"}
              date={"2022. 07. 26. 화요일"}
              content={"글이 이상해요 신고해요"}
            />
            <AdminReportItem
              nickname={"별생각"}
              date={"2022. 07. 26. 화요일"}
              content={"글이 이상해요 신고해요"}
            />
          </>
        );
      }}
      Popup={() => {
        return (
          <>
            <AdminReportPopup modalId={3} content={"테스트내용"} />
          </>
        );
      }}
    />
  );
};

export default AdminUser;
