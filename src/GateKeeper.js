import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

const currentUser = true;

export const GateKeeper = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App user={currentUser} />} />
        <Route path="/login" element={<div>no current user</div>} />
      </Routes>
    </Router>
  );
};
