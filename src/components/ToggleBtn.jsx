const ToggleBtn = ({ theme, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="w-12 h-5 rounded-full bg-black flex items-center p-1"
    >
      <div
        className={`transition-all flex items-center duration-500 w-3 h-3 bg-white rounded-full ${
          theme === "dark" ? "translate-x-7 bg-yellow-300" : ""
        }`}
      >
        <div
          className={`w-[11px] h-[11px] transition-all duration-500 bg-black rounded-full -translate-x-[3px] ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleBtn;
