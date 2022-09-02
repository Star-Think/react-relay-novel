import React from "react";

const InputBox = ({
  type,
  autofocus,
  maxlength,
  placeholder,
  ref,
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
        maxlength={maxlength}
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </p>
  );
};

InputBox.defaultProps = {
  type: "text",
  autofocus: false,
  maxlength: "20",
  placeholder: "",
  onChange: () => {},
};

export default InputBox;
