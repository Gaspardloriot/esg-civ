import { Container } from "react-bootstrap";

export const Component2 = () => {
  return (
    <>
      <h3 style={{ color: "white" }}>Metabase</h3>
      <Container>
        <iframe
          src="https://esg-test.herokuapp.com/embed/dashboard/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjJ9LCJwYXJhbXMiOnt9LCJleHAiOjE2MzgyODE4NDd9.ZrwwY5Q_aBCOoUAP0ol0Beo6W-II1VnnbAg5h7IsIBY#theme=night&bordered=true&titled=true"
          frameBorder="0"
          width="100%"
          height="1000px"
          style={{
            borderRadius: "6px",
            padding: "5px",
            backgroundColor: "#A9A9A9",
          }}
        ></iframe>
      </Container>
    </>
  );
};
