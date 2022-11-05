import { Container, Card, Button, Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <>
      <Container
        style={{
          height: "auto",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "baseline",
              paddingTop: "10px",
            }}
          >
            <h6 style={{ marginRight: "20px" }}>Loading...</h6>
            <Spinner animation="grow" size="sm" />
          </div>
        </div>
      </Container>
    </>
  );
};
