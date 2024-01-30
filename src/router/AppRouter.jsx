import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "../components/NavBar";

import HomePage from "../pages/HomePage";
import Menu from "../pages/Menu";
import Reservaciones from "../pages/Reservaciones";
import Contactenos from "../pages/Contactenos";

const AppRouter = () => {
  return (
    <>
      <Router>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservaciones" element={<Reservaciones />} />
            <Route path="/contactenos" element={<Contactenos />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
