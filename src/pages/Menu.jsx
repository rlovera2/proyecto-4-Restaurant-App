 import image1 from "../img/icono_menu.jpg";

import Header from "../components/Header";
import Footer from "../components/Footer";


const Menu = () => {
    return (
      <>
        <main className="row">
          <article className="col">

            <Header />
            <br />
            <table><tr><td>
            <span className="tituloPagina">Menu</span>
            </td>
            <td>
            <img id="menu" src={image1} height="54" width="54" />
            </td></tr>
            </table>
            <br />
            
            <table>
                <tr><td className="celdas_tabla_menu">
                  <span className="subtituloTabla">
                    Pastas
                  </span>
             <ul>
                <li>Bolo&ntilde;esa</li>
                <li>Carbonara</li>
                <li>Putanesca</li>
                <li>Ravioli</li>
            </ul>
            </td>

            <td className="celdas_tabla_menu">
              <span className="subtituloTabla">
                Risotto
              </span>
            <ul>
                <li>Piemomtese</li>
                <li>Al negro</li>
            </ul>
            </td>
            
            <td className="celdas_tabla_menu">
            <span className="subtituloTabla">
              Postres
            </span>
            <ul>
                <li>Helado Mantecado</li>
                <li>Helado Chocolate</li>
                <li>Semifredo</li>
                <li>Gelato al Tartufo</li>
                <li>Crep de Nutella</li>
            </ul>

            </td></tr>
            </table>
            
            <Footer />
          
          </article>
        </main>
      </>
    );
  };


   export default Menu;