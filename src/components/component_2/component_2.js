import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mainColors as styles } from "../../globalStyles";

const MetaBaseDashboard = styled.iframe`
  border-radius: 5px;
  padding: 2px;
  background-color: ${styles.main.dashboardBorder};
`;

const DashboardContainer = styled(Container)`
  width: 75%;
`;

export const Component2 = () => {
  return (
    <>
      <DashboardContainer fluid>
        <MetaBaseDashboard
          title="myFrame"
          src="https://esg-analytics.herokuapp.com/embed/dashboard/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjF9LCJwYXJhbXMiOnt9LCJleHAiOjE2Mzg4ODI5NjJ9.K1MYzXsxq2nmlq-Isy48lgQyr4SIAo-HnmFC8kdBHbY#theme=night&bordered=true&titled=true"
          width="100%"
          height="2000px"
        ></MetaBaseDashboard>
      </DashboardContainer>
    </>
  );
};
