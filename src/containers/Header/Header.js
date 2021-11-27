import { useDispatch } from "react-redux";
import { switchComponent } from "../../redux/reducer";
import { Container, Navbar } from "react-bootstrap";
import logo from "./greens.png";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <button onClick={() => dispatch(switchComponent("Component1"))}>
            component1
          </button>
          <button onClick={() => dispatch(switchComponent("Component2"))}>
            component2
          </button>
        </Container>
      </Navbar>
    </>
  );
};
