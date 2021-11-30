import { Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleOverlay } from "../../redux/reducer";

export const Overlay = () => {
  const { Overlay } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return (
    <>
      <Offcanvas
        show={Overlay.isVisible}
        onHide={() => dispatch(toggleOverlay())}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
