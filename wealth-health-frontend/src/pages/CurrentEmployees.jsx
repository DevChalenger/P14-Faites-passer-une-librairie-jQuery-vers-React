import { useSelector } from "react-redux";
import { selectTheme } from "../redux/selectors";
import TitlePage from "../utils/TitlePage";

function CurrentEmployees() {
  const theme = useSelector(selectTheme);

  return (
    <main>
      <TitlePage title="Current Employee" theme={theme} />
    </main>
  );
}

export default CurrentEmployees;
