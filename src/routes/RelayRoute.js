import React from "react";

import { Routes, Route } from "react-router-dom";
import RelayMain from "../pages/relay/RelayMain";

const RelayRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RelayMain />} />
    </Routes>
  );
};

export default RelayRoute;
