import React from "react";

const MemoPage = () => {
  return (
    <div className="btn-group flex justify-center mt-20">
      <a href="?page=1" className="btn">
        &lt;&lt;
      </a>

      <a href="?page=2" className="btn btn-primary">
        1
      </a>

      <a href="?page=3" className="btn">
        &gt;&gt;
      </a>
    </div>
  );
};

export default MemoPage;
