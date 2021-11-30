import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchComponent, toggleOverlay } from "../../redux/reducer";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "./leaf_logo.svg";

const HeaderNav = styled(Navbar)`
  background-color: #c0c0c0;
  border-radius: 1px 1px 4px 4px;
  border: 2px solid #006600;
`;
const NavLogo = styled.img`
  margin-right: 15px;
`;
const NavLink = styled(Nav.Link)`
  color: ${(props) =>
    props.isActive ? "#006600 !important" : "#202020 !important"};
  border-bottom: ${(props) => (props.isActive ? "2px solid grey" : "0")};
  :hover {
    color: ${(props) =>
      props.isActive ? "#202020 !important" : "#006600 !important"};
  }
`;

const HeaderContainer = styled(Container)`
  margin-left: 10px;
  width: auto;
`;

//Styled components with props example code below !
//color: ${(props) => props.inputColor || "palevioletred"};

export const Header = () => {
  const { component } = useSelector((state) => state.fullState);
  const { Overlay } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return (
    <>
      <HeaderNav sticky="top" expand={false}>
        <HeaderContainer>
          <Navbar.Brand href="#home">
            <NavLogo
              title="test-metabase"
              src={logo}
              width="50"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <strong
              style={{
                color: "#202020",
                fontStyle: "italic",
                fontWeight: "400",
              }}
            >
              ESG Analytics
            </strong>
          </Navbar.Brand>
          <NavLink
            onClick={() => dispatch(switchComponent("Component1"))}
            isActive={component === "Component1"}
          >
            Component1
          </NavLink>
          <NavLink
            onClick={() => dispatch(switchComponent("Component2"))}
            isActive={component === "Component2"}
          >
            Dashboard
          </NavLink>
        </HeaderContainer>
      </HeaderNav>
    </>
  );
};
