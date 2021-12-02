import { Container } from "react-bootstrap";
import styled from "styled-components";

const MetaBaseDashboard = styled.iframe`
  border-radius: 5px;
  padding: 2px;
  background-color: #a9a9a9;
`;

const DashboardContainer = styled(Container)`
  width: 85%;
`;

export const Component2 = () => {
  return (
    <>
      <DashboardContainer fluid>
        <MetaBaseDashboard
          title="myFrame"
          src="https://esg-test.herokuapp.com/embed/dashboard/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjJ9LCJwYXJhbXMiOnt9LCJleHAiOjE2Mzg0ODc3MTB9.mwxhnYnj3kOJFdLxsIyR4KZDvUq3NX62QXg2J16Ep-I#theme=night&bordered=true&titled=true"
          width="100%"
          height="2000px"
        ></MetaBaseDashboard>
      </DashboardContainer>
    </>
  );
};
