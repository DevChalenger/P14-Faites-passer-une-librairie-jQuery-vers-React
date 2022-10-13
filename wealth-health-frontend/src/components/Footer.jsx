import "../styles/css/footer.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../redux/selectors";
import * as themeActions from "../redux/features/reducers/theme";
import IconButton from "@mui/material/IconButton";
import DarkMode from "@mui/icons-material/Brightness3";
import LightMode from "@mui/icons-material/LightMode";
import useTheme from "../utils/Theme";

function Footer() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const { backgroundTheme, contentTheme } = useTheme();

  return (
    <footer className={`app-footer ${backgroundTheme} ${contentTheme}`}>
      <p className="app-footer-copyright">Copyright © 2022 Wealth Health</p>
      <IconButton
        onClick={() => dispatch(themeActions.toggle())}
        className={`${contentTheme}`}
        aria-label="Toggle Theme Mode"
      >
        {theme === "light" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </footer>
  );
}

export default Footer;
