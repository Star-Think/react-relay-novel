import "./asset/css/full.css";
import "./asset/css/tailwind.min.css";
import "./asset/css/font-awesome.css";
import "./asset/css/App.css";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RelayRoute from "./routes/RelayRoute";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import React from "react";
import AdminRoute from "./routes/AdminRoute";
import MyRoute from "./routes/MyRoute";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my/*" element={<MyRoute />} />
        <Route exact path="/relay/*" element={<RelayRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </>
  );
}

export default App;
