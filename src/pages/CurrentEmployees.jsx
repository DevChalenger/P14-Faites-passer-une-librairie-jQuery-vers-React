import useTheme from "../utils/Theme";
import TitlePage from "../utils/TitlePage";
import { Table } from "react-data-list-table-component";
import mocksData from "../__mock__/MOCK_DATA.json";
import "../styles/css/currentEmployees.css";
import { useSelector } from "react-redux";
import { selectEmployee } from "../redux/selectors";
import { useEffect, useState } from "react";

function CurrentEmployees() {
  const { backgroundTheme, contentTheme } = useTheme();

  const { data } = useSelector(selectEmployee);
  const [isMocked, setIsMocked] = useState(!data.length ? true : false);
  const [employeeTitle, setEmployeeTitle] = useState([]);
  const employeeData = isMocked ? mocksData : data;

  useEffect(() => {
    if (data.length === 0) {
      setIsMocked(true);
    }
    setEmployeeTitle(Object.keys(employeeData[0]));
  }, [data, employeeData]);

  const backgroundPrimary =
    backgroundTheme === "light-theme" ? "#efefef" : "#2b2b2b";

  const contentPrimary =
    contentTheme === "light-content" ? "#5a6f08" : "#d4d4d4";

  const backgroundSecondary =
    backgroundTheme === "light-theme" ? "#b1c46c" : "#efefef";

  const contentSecondary =
    contentTheme === "light-content" ? "#efefef" : "#2b2b2b";

  return (
    <main className="current-employee-container main-container">
      <TitlePage title="Current Employee" />
      <section className={`current-employee-section `}>
        <Table
          dataTable={employeeData}
          dataTitle={employeeTitle}
          tableTitle={"Current Employees"}
          rowsPerTable={10}
          range={3}
          selectEntries
          backgroundThemePrimary={backgroundPrimary}
          contentThemePrimary={contentPrimary}
          backgroundThemeSecondary={backgroundSecondary}
          contentThemeSecondary={contentSecondary}
        />

        {data.length ? (
          <button
            onClick={() => (isMocked ? setIsMocked(false) : setIsMocked(true))}
          >
            Show{" "}
            {isMocked ? <span> storage data</span> : <span>mocked data</span>}
          </button>
        ) : (
          ""
        )}
      </section>
    </main>
  );
}

export default CurrentEmployees;
