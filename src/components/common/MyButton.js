const MyButton = ({ onClick, text }) => {
  return (
    <button
      class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md"
      className={"MyButton"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton;
