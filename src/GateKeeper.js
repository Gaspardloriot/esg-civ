import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import App from "./App";
import { Login } from "./containers/login/login";

export const GateKeeper = () => {
  const { context } = useSelector((state) => state.fullState);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App user={context.currentUser} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
