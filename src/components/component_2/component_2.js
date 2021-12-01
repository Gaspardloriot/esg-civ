import { Container } from "react-bootstrap";

export const Component2 = () => {
  return (
    <>
      <h1 style={{ color: "white" }}>Metabase</h1>
      <Container>
        <iframe
          title="myFrame"
          src="https://esg-test.herokuapp.com/embed/dashboard/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjJ9LCJwYXJhbXMiOnt9LCJleHAiOjE2MzgzNzEzMDl9.ZGWjhCrkt4qeIOz7OkhXxsfU1BuPf8eyUfR2EEAVo7Q#theme=night&bordered=true&titled=true"
          frameBorder="0"
          width="100%"
          height="1000px"
          style={{
            borderRadius: "5px",
            padding: "2px",
            backgroundColor: "#A9A9A9",
          }}
        ></iframe>
      </Container>
    </>
  );
};
