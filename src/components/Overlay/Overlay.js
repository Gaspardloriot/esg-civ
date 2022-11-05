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
        style={{
          borderRadius: "4px 0px 0px 4px",
          border: "3px solid #0a4f10",
          backgroundColor: "#E0E0E0",
          color: "#0a4f10",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <form>
          <h1>React File Upload</h1>
          <input type="file"/>
          <button type="submit">Upload</button>
        </form>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
        <div style={{ height: "100%", backgroundColor: "red", margin: "7px", borderRadius: "4px" }}><p>test</p></div>
        
      </Offcanvas>
    </>
  );
};
