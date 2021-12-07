import { useState } from "react";
import { Navigate } from "react-router";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { changeAuth } from "../../redux/reducer";
import { auth } from "../../security/firebase";
import { Container, Alert, Button, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { mainColors as styles } from "../../globalStyles";
import logo from "../../containers/Header/icons8-nordvpn.svg";

const Page = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${styles.main.appBackground};
  min-height: 100vh;
  color: white;
`;

const MainContainer = styled.div`
  background-color: ${styles.header.headerBackground};
  border: 1px solid ${styles.metabase.metabaseBlue};
  padding: 15px;
  border-radius: 4px;
  width: 30%;
`;

const LogInput = styled.input`
  padding: 7px;
  margin: 8px 20px;
  background-color: transparent;
  border-radius: 0px;
  border: 1px solid transparent;
  border-bottom: 2px solid white;
  color: white;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    font-weight: 100;
    opacity: 0.8; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: red;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: red;
  }
`;

export const Login = () => {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, content: "" });
  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const currentUser = auth.currentUser;

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(
      changeAuth(
        currentUser
          ? {
              email: currentUser.email,
              uid: currentUser.uid,
            }
          : currentUser
      )
    );
  });

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const login = async () => {
    try {
      setSpinnerDisplay("");
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      //const idToken = await currentUser.getIdToken(/* forceRefresh */ true);
      //console.log(idToken);
    } catch (error) {
      setSpinnerDisplay("none");
      setAlert({
        show: true,
        content: error.message.replace("Firebase: ", ""),
      });
    }
  };

  return (
    <Page fluid>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "15px",
          backgroundColor: "white",
          borderRadius: "4px",
          color: "black",
          border: "1px solid black",
        }}
      >
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img
            src={logo}
            width="100"
            height="auto"
            style={{ backgroundColor: "white", borderRadius: "4px" }}
          />
        </div>
        <p style={{ textAlign: "center", fontSize: "25px", fontWeight: "100" }}>
          ESG Analytics
        </p>
      </div>
      <MainContainer>
        <Alert key={1} variant="danger" show={alert.show}>
          {alert.content}
        </Alert>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <LogInput
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <LogInput
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <Button
            onClick={login}
            variant="light"
            style={{ margin: "10px 100px", marginTop: "10px" }}
          >
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ display: spinnerDisplay }}
            />{" "}
            Login
          </Button>
        </div>
      </MainContainer>
    </Page>
  );
};
