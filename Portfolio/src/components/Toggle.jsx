import { useDispatch, useSelector } from "react-redux";
import { getTheme, toggleTheme } from "../redux/themeSlice";

function Toggle() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        onChange={handleToggleTheme}
        checked={theme === "dark"}
      />
      <div className="round-button">
        <div></div>
        <div></div>
        <div></div>
        <div className="button-body"></div>
      </div>
    </div>
  );
}

export default Toggle;
