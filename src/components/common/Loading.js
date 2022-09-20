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
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "999",
        top: "0px",
        left: "0px",
      }}>
      <div className="contentWrap">
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <PacmanLoader
            color="rgba(214, 54, 54, 1)"
            cssOverride={{
              height: "100%",
              position: "absolute",
            }}
            speedMultiplier={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Loading;
