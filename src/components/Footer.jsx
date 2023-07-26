import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="contenedor_footer">
      
<span>
        <br />
        <div className="menu_footer">

        
              <NavLink className="nav-link" to="/">Home</NavLink> | <a href="/menu">Menu</a> | <a href="/reservaciones">Resevaciones</a> | <a href="/contactenos">Contactenos</a> <br />
        
        <br />
          Para cualquier falla en el sistema puede ponerse 
          en contacto con el adminisrador del sistema.
          <br />
          <a href="mailto:reservaciones@lapasta.com" title="reservaciones">reservaciones@lapasta.com</a>
          <br /><br />
          </div>
</span>
      </footer>

      
    
    </>
  );
};

export default Footer