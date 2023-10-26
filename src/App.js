import { useState } from "react";
import Clock from "./components/Clock";
import ToggleBtn from "./components/ToggleBtn";
import vector1 from "./assets/Group 1.svg";
import vector2 from "./assets/Group 2.svg";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };

  return (
    <div
      className={`${theme} flex items-center justify-center h-screen relative`}
    >
      <div className="absolute top-5 right-5">
        <ToggleBtn onToggle={handleToggle} theme={theme} />
      </div>
      <Clock />
      <div className="absolute top-40 left-12">
        <img src={vector1} />
      </div>
      <div className="absolute bottom-40 right-12">
        <img src={vector2} />
      </div>
    </div>
  );
}

export default App;
