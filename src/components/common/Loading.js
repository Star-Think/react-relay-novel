import React from "react";
import { PacmanLoader } from "react-spinners";

function Loading() {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div class="contentWrap">
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <PacmanLoader color="rgba(214, 54, 54, 1)" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
