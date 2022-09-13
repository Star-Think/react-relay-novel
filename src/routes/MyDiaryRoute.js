import React from "react";

import { Routes, Route } from "react-router-dom";
import MemoWrite from "../components/common/MemoWrite.js";

const EveryRoute = () => {
  return (
    <Routes>
      <Route exact path="/memowrite" element={<MemoWrite />} />
    </Routes>
  );
};

export default EveryRoute;
