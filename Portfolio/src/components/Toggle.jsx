import { useDispatch, useSelector } from "react-redux";
import { getTheme, toggleTheme } from "../redux/themeSlice";

// This component, Toggle, remains unchanged. It toggles between light and dark themes based on the current theme state stored in Redux.
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
