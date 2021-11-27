import { useDispatch, useSelector } from "react-redux";
import { test } from "../../redux/reducer";
import { Login } from "../login/login";

const logged = true;

const HeaderTest = () => {
  const { testing } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return logged ? (
    <Login test_props="hello mate" />
  ) : (
    <>
      <div>{testing}</div>
      <button onClick={() => dispatch(test())}>test</button>
    </>
  );
};

export { HeaderTest };
