import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="contenedor_footer">
        <span>
          <br />
          <center>
            <div className="menu_footer">
              <NavLink to="/">Home</NavLink> |{" "}
              <NavLink to="/menu">Menu</NavLink> |{" "}
              <NavLink to="/reservaciones">Resevaciones</NavLink> |{" "}
              <NavLink to="/contactenos">Contactenos</NavLink> <br />
              <br />
              Para cualquier falla en el sistema puede ponerse en contacto con
              el adminisrador del sistema.
              <br />
              <a href="mailto:adminsystem@lapasta.com" title="reservaciones">
                adminsystem@lapasta.com
              </a>
              <br />
              <br />
            </div>
          </center>
        </span>
      </footer>
    </>
  );
};

export default Footer;
