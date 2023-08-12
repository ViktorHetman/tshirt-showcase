const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: "#EFBD48",
        color: "white",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
