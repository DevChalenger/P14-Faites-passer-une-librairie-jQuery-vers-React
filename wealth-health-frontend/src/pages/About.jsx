import { useSelector } from "react-redux";
import { selectTheme } from "../redux/selectors";
import TitlePage from "../utils/TitlePage";

function About() {
  const theme = useSelector(selectTheme);

  return (
    <main>
      <TitlePage title="About" theme={theme} />
    </main>
  );
}

export default About;
