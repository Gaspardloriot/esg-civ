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
const BrandContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  background-color: white;
  border-radius: 4px;
  color: black;
  border: 1px solid black;
`;

const LogoContainer = styled.div`
  justify-content: center;
  display: flex;
`;

const Logo = styled.img`
  background-color: white;
  border-radius: 4px;
`;

const BrandName = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 100;
`;

const MainContainer = styled.div`
  background-color: ${styles.header.headerBackground};
  border: 1px solid ${styles.metabase.metabaseBlue};
  padding: 15px;
  border-radius: 4px;
  width: 30%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const LoginButton = styled(Button)`
  margin: 10px 100px;
  margin-top: 10px;
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
      <BrandContainer>
        <LogoContainer>
          <Logo
            alt="company logo login page"
            src={logo}
            width="100"
            height="auto"
          />
        </LogoContainer>
        <BrandName>ESG Analytics</BrandName>
      </BrandContainer>
      <MainContainer>
        <Alert key={1} variant="danger" show={alert.show}>
          {alert.content}
        </Alert>
        <InputContainer>
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
          <LoginButton onClick={login} variant="light">
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ display: spinnerDisplay }}
            />{" "}
            Login
          </LoginButton>
        </InputContainer>
      </MainContainer>
    </Page>
  );
};
