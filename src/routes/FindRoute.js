import React from "react";

import { Routes, Route } from "react-router-dom";
import FindId from "../pages/find/FindId";
import FindPwd from "../pages/find/FindPwd";
import FindResult from "../pages/find/FindResult";

const FindRoute = () => {
  return (
    <Routes>
      <Route exact path="/findId" element={<FindId />} />
      <Route exact path="/findPwd" element={<FindPwd />} />
      <Route exact path="/findResult" element={<FindResult />} />
    </Routes>
  );
};

export default FindRoute;
