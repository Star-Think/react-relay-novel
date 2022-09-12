import React from "react";

const AdminDiaryItem = ({ seq, nickname, date, content, stateName }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full p-5" style={{ maxHeight: "300px" }}>
      <a href={`#${seq}`}>
        <div className="hover:shadow-2xl card shadow-lg w-full h-full break-all">
          <div className="card-body h-72 bg-white">
            <div className="flex justify-between">
              <p className="text-sm badge badge-primary">{stateName}</p>
              <div>
                <p className="text-sm text-gray-500 text-right">{nickname}</p>
                <p className="text-right text-sm text-gray-500">{date}</p>
              </div>
            </div>
            <div className="divider my-0"></div>
            <div className="text-clip overflow-hidden">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdminDiaryItem;
