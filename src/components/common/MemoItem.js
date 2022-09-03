import { useNavigate } from "react-router-dom";

const MemoItem = ({ memo, isMyMemo }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:w-1/3 md:w-1/2 w-full p-5">
        <div
          onClick={() => navigate(`/everydiary/detail/${memo.idx}`)}
          style={{ cursor: "pointer" }}>
          <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
            <div className="card-body h-72 bg-white">
              <div className="flex justify-between">
                <p>{memo.user_name}</p>
              </div>
              <div className="flex justify-between">
                {memo.state === 1 && !isMyMemo ? (
                  <div className="badge badge-success">완결</div>
                ) : (
                  <div></div>
                )}

                <p className="text-sm text-gray-500 text-right">조회수 {memo.views}</p>
              </div>
              <p className="text-sm text-gray-500 text-right">조회수 {memo.views}</p>
            </div>

            <div className="divider my-0"></div>
            <h2 className="card-title">{memo.title}</h2>

            <p>{memo.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoItem;
