import "./asset/css/full.css";
import "./asset/css/tailwind.min.css";
import "./asset/css/font-awesome.css";
import "./asset/css/App.css";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RelayMain from "./pages/relay/RelayMain";
import RelayRoute from "./routes/RelayRoute";
import Home from "./pages/home/Home";

function App() {
  // useEffect(() => {
  //   let list = [];
  //   for (let i = 0; i < 100; i++) {
  //     list.push({
  //       idx: i,
  //       title: `제목${i}`,
  //       content: `내용${i}`,
  //       date: 1658195117794,
  //       user_name: "별생각",
  //       views: i,
  //       type: 0,
  //       state: 0,
  //     });
  //   }

  //   console.log(list);
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/relay/*" element={<RelayRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
