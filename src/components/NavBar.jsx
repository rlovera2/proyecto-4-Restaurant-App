import { NavLink } from "react-router-dom";
import image1 from "../img/tenedor_pasta1.jpg";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark" 
    >
      <div className="container" height="auto" width="500px">
        <a className="navbar-brand" href="#">
          <img src={image1} height="15%" width="15%" />
          <font color="#FFFFFF">
        La Pasta</font>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reservaciones">
                Reservaciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contactenos">
                Contactenos
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
