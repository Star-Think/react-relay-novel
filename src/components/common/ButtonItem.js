import React from "react";

const ButtonItem = ({ text, btnColor, mx_2, btnIcon, click }) => {
  return (
    <div
      onClick={() => click()}
      className={["btn btn-xs sm:btn-sm md:btn-md lg:btn-md", btnColor, mx_2].join(" ")}>
      <i className={["fa-solid", btnIcon].join(" ")}></i>&nbsp;{text}
    </div>
  );
};

ButtonItem.defaultProps = {
  mx_2: "",
  btnIcon: "",
};

export default ButtonItem;
