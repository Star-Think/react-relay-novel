import "./App.css";
import "./full.css";
import "./tailwind.min.css";
// import "./font-awesome.css";

function App() {
  return (
    <>
      <div className="navbar mb-0 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none px-2 mx-2">
          <a href="/" className="text-2xl font-bold">
            릴레이 소설
          </a>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <a href="/topic/" className="btn btn-ghost btn-sm rounded-btn">
              {/* 재미있는 일기 주제 */}
            </a>
          </div>
        </div>

        <div className="flex-1 px-2 mx-2 navbar-end">
          <div className="items-stretch hidden lg:flex">
            <a href="/mydiary/" className="btn btn-ghost btn-sm rounded-btn">
              {/* 내 일기장 */}
            </a>
            <a href="/classroom/" className="btn btn-ghost btn-sm rounded-btn">
              {/* 우리반 일기장 */}
            </a>
            <a href="/everydiary/" className="btn btn-ghost btn-sm rounded-btn">
              {/* 모두의 일기장 */}
            </a>

            <a href="/signup/" className="btn btn-ghost btn-sm rounded-btn">
              회원가입
            </a>
            <a href="/login/" className="btn btn-ghost btn-sm rounded-btn">
              로그인
            </a>
          </div>
          <div id="burgerButton" className="flex-none xl:hidden lg:hidden">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="burgerMenu" className="flex justify-end z-10 hidden">
        <ul className="menu bg-neutral text-neutral-content w-screen">
          <a href="/topic/" className="btn btn-ghost">
            재미있는 일기 주제
          </a>

          <a href="/mydiary/" className="btn btn-ghost">
            내 일기장
          </a>
          <a href="/classroom/" className="btn btn-ghost">
            우리반 일기장
          </a>
          <a href="/everydiary/" className="btn btn-ghost">
            모두의 일기장
          </a>

          <a href="/signup/" className="btn btn-ghost">
            회원가입
          </a>
          <a href="/login/" className="btn btn-ghost">
            로그인
          </a>
        </ul>
      </div>
    </>
  );
}

export default App;
