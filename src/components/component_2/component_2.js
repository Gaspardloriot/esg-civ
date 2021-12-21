import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";
import { getMetabaseUrls } from "../../security/metabaseUrls";
import { mainColors as styles } from "../../globalStyles";
import { useEffect } from "react";

const MetaBaseDashboard = styled.iframe`
  border-radius: 5px;
  padding: 2px;
  background-color: ${styles.main.dashboardBorder};
`;

const DashboardContainer = styled(Container)`
  width: 75%;
`;

export const Component2 = () => {
  const { context } = useSelector((state) => state.fullState);
  const [dashboardUrl, setDashboarUrl] = useState(null);

  useEffect(() => {
    const getDashboardUrl = async () => {
      const response = await getMetabaseUrls(context.idToken);
      setDashboarUrl(response);
    };

    dashboardUrl == null && getDashboardUrl();

    const timeOut = setInterval(() => {
      dashboardUrl && getDashboardUrl();
      dashboardUrl && console.log(dashboardUrl?.expiry * 1000 * 60 - 1000000);
    }, dashboardUrl?.expiry * 1000 * 60 - 1000000);
    return () => clearTimeout(timeOut);
  }, [context.idToken, dashboardUrl]);

  return (
    <>
      <DashboardContainer fluid>
        <Loader />
        <MetaBaseDashboard
          title="myFrame"
          src={dashboardUrl?.iframeUrl}
          width="100%"
          height="2000px"
        ></MetaBaseDashboard>
      </DashboardContainer>
    </>
  );
};
