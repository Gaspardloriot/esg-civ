import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchComponent } from "../../redux/reducer";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "./icons8-nordvpn.svg";

const HeaderNav = styled(Navbar)`
  background-color: #071224;
  border-radius: 1px 1px 4px 4px;
  border: 2px solid #509ee3;
  margin-bottom: 30px;
`;

const NavBrand = styled(Navbar.Brand)`
  background-color: #f0f0f0;
  border-radius: 3px;
  padding: 6px;
`;
const NavLogo = styled.img`
  margin-right: 10px;
`;
const NavLink = styled(Nav.Link)`
  margin-left: 30px;
  color: ${(props) =>
    props.isActive ? "#787878 !important" : "#E0E0E0 !important"};
  border-bottom: ${(props) => (props.isActive ? "2px solid #BEBEBE" : "0")};
  :hover {
    color: ${(props) =>
      props.isActive ? "#E0E0E0 !important" : "#787878 !important"};
  }
`;

const CompanyTitle = styled.span`
  color: black;
  font-style: italic;
  font-weight: 100;
`;

const HeaderContainer = styled(Container)`
  margin-left: 10px;
  width: auto;
`;

export const Header = () => {
  const { component } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return (
    <>
      <HeaderNav sticky="top" expand={false}>
        <HeaderContainer>
          <NavBrand href="#home">
            <NavLogo
              title="test-metabase"
              src={logo}
              width="30"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <CompanyTitle>ESG Analytics</CompanyTitle>
          </NavBrand>
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
