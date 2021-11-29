import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchComponent } from "../../redux/reducer";
import { Container, Navbar, Button } from "react-bootstrap";
import logo from "./leaf_logo.svg";

const HeaderNav = styled(Navbar)`
  background-color: #90ee90;
  border-radius: 1px 1px 4px 4px;
  border: 1px solid #a9a9a9;
`;

const HeaderButton = styled(Button)`
  margin: 0px 5px 0px 5px;
  padding: 4px;
  }
`;

const HeaderContainer = styled(Container)`
  margin-left: 10px;
`;

//Styled components with props example code below !
//color: ${(props) => props.inputColor || "palevioletred"};

export const Header = () => {
  const { component } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return (
    <>
      <HeaderNav sticky="top">
        <HeaderContainer>
          <Navbar.Brand href="#home">
            <img
              title="test-metabase"
              src={logo}
              width="50"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ marginRight: "15px" }}
            />
            <strong>ESG Analytics</strong>
          </Navbar.Brand>
          <Container>
            <HeaderButton
              onClick={() => dispatch(switchComponent("Component1"))}
              variant={component === "Component1" ? "dark" : "outline-dark"}
            >
              component1
            </HeaderButton>
            <HeaderButton
              onClick={() => dispatch(switchComponent("Component2"))}
              variant={component === "Component2" ? "dark" : "outline-dark"}
            >
              component2
            </HeaderButton>
          </Container>
        </HeaderContainer>
      </HeaderNav>
    </>
  );
};
