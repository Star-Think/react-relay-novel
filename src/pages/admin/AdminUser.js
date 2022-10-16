import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminBtnTop from "../../components/admin/AdminBtnTop";
import AdminReportItem from "../../components/admin/AdminReportItem";
import AdminReportPopup from "../../components/admin/AdminReportPopup";
import AdminTop from "../../components/admin/AdminTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Loading from "../../components/common/Loading";
import Pagination from "../../components/common/Pagination";
import { timeChange } from "../../utils/CommonFun";

const AdminUser = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState(16);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(null);

  const lockScroll = React.useCallback(() => {
    document.body.style.height = "100%";
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.height = "";
  }, []);

  useEffect(() => {
    lockScroll();
    setLoading(true);
    getData();
  }, [page, select]);

  const getData = async () => {
    return await axios({
      method: "post",
      url: process.env.REACT_APP_DB_HOST + "/api/reportUserGet",
      data: {
        page: page,
        rows: rows,
        keyword: select,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        setTotal(res.data.data.count);
        setDataList(res.data.data.list);
        window.scrollTo(0, 0);
        setTimeout(() => {
          unlockScroll();
          setLoading(false);
        }, 1500);
      })
      .catch(() => {
        unlockScroll();
        setLoading(false);
      });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto w-full p-5" style={{ marginTop: "100px" }}>
        <AdminTop title={"회원 신고"} />
        <AdminBtnTop select={select} setSelect={setSelect} setPage={setPage} />
      </div>
      <div className="container mx-auto flex flex-wrap justify-start">
        {dataList.map((data) => {
          return (
            <AdminReportItem
              key={data.report_seq}
              seq={data.report_seq}
              nickname={data.username}
              date={timeChange(data.create_date)}
              content={data.report_content}
              stateName={data.state_name}
            />
          );
        })}
      </div>
      <Pagination total={total} rows={rows} page={page} setPage={setPage} />
      {dataList.map((data) => {
        return (
          <AdminReportPopup
            key={data.report_seq}
            modalId={data.report_seq}
            title={data.title}
            content={data.content}
            reportData={data}
            getData={getData}
          />
        );
      })}
      {loading ? <Loading /> : null}
      <Footer />
    </>
  );
};

export default AdminUser;
