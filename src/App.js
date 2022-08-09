import "./asset/css/full.css";
import "./asset/css/tailwind.min.css";
import "./asset/css/font-awesome.css";
import "./asset/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RelayMain from "./pages/relay/RelayMain";
import RelayRoute from "./routes/RelayRoute";
import MyDiary from "./pages/mydiary/MyDiary";
import MyPage from "./pages/mypage/MyPage";
import MyButton from "./components/common/MyButton";

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
          <Route exact path="/classroom" element={<MyDiary />} />
          <Route exact path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
