import React from "react";

const InputBox = ({
  type,
  autofocus,
  maxLength,
  placeholder,
  forwardRef,
  value,
  onChange,
}) => {
  return (
    <p>
      <input
        className="input  input-primary input-bordered my-2"
        style={{ width: "100%" }}
        type={type}
        {...(autofocus === true ? (autofocus = "") : null)}
        maxLength={maxLength}
        placeholder={placeholder}
        ref={forwardRef}
        value={value}
        onChange={onChange}
      />
    </p>
  );
};

InputBox.defaultProps = {
  type: "text",
  autofocus: false,
  maxLength: "20",
  placeholder: "",
  onChange: () => {},
};

export default InputBox;
