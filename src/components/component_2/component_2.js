import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useSelector } from "react-redux";
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
  const { context } = useSelector((state) => state.fullState);
  /*function intervalFunc() {
    console.log("Cant stop me now!");
  }*/

  //setInterval(intervalFunc, 1500);
  return (
    <>
      <DashboardContainer fluid>
        <MetaBaseDashboard
          title="myFrame"
          src={context.metabaseUrls}
          width="100%"
          height="2000px"
        ></MetaBaseDashboard>
      </DashboardContainer>
    </>
  );
};
