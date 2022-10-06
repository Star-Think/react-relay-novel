import { useNavigate } from "react-router-dom";

const MemoItem = ({ memo, path }) => {
  const navigate = useNavigate();
  const isMyMemo = path === "/my";

  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 w-full p-5">
        <div
          onClick={() =>
            isMyMemo
              ? navigate(`${path}/detail/${memo.seq}`, { state: { data: memo } })
              : navigate(`${path}/detail/${memo.seq}`, { state: { data: memo } })
          }
          style={{ cursor: "pointer" }}>
          <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
            <div className="card-body h-72 bg-white">
              {isMyMemo ? (
                <>
                  <div className="flex justify-between">
                    {memo.type === "0" ? (
                      <div className="badge badge-primary">모두 공개</div>
                    ) : (
                      <div className="badge badge-error">비공개</div>
                    )}
                    <div>
                      <p className="text-right text-sm text-gray-500">{memo.create_date}</p>
                      <p className="text-sm text-gray-500 text-right">조회수 {memo.view}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <p>{memo.user_name}</p>
                    <p className="text-right text-sm text-gray-500">{memo.create_date}</p>
                  </div>
                  <div className="flex justify-between">
                    {memo.state === 1 ? (
                      <div className="badge badge-success">완결</div>
                    ) : (
                      <div></div>
                    )}

                    <p className="text-sm text-gray-500 text-right">조회수 {memo.view}</p>
                  </div>
                </>
              )}
              <div className="divider my-0"></div>
              <h2 className="card-title">{memo.title}</h2>
              <p>{memo.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoItem;
