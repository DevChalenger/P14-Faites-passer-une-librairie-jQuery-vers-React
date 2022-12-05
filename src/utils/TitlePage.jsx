import { Helmet } from "react-helmet-async";

const TitlePage = ({ title }) => {
  return (
    <Helmet>
      <title>HRnet - {title}</title>
    </Helmet>
  );
};

export default TitlePage;
