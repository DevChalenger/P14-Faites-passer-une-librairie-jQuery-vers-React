import { useSelector } from "react-redux";
import { selectTheme } from "../redux/selectors";

const Theme = () => {
  const theme = useSelector(selectTheme);
  const backgroundTheme = theme === "light" ? "light-theme" : "dark-theme";
  const contentTheme = theme === "light" ? "light-content" : "dark-content";
  return { backgroundTheme, contentTheme };
};

export default Theme;
