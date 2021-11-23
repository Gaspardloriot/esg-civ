import { useDispatch, useSelector } from "react-redux";
import { test } from "../../redux/reducer";

const HeaderTest = () => {
  const { testing } = useSelector((state) => state.fullState);
  const dispatch = useDispatch();
  return (
    <>
      <div>{testing}</div>
      <button onClick={() => dispatch(test())}>test</button>
    </>
  );
};

export { HeaderTest };
