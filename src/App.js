import "./asset/css/full.css";
import "./asset/css/tailwind.min.css";
import "./asset/css/font-awesome.css";
import "./asset/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RelayMain from "./pages/relay/RelayMain";
import RelayRoute from "./routes/RelayRoute";

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
          <Route exact path="/" element={<RelayMain />} />
          <Route exact path="/relay/*" element={<RelayRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
