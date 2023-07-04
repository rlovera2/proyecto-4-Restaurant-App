 import image1 from "../img/@.jpg";

import Header from "../components/Header";
import Footer from "../components/Footer";


const Menu = () => {
    return (
      <>
      <Header />
        <main className="row">
          <article className="col">


            <br />
            <table><tr><td>
            <span className="tituloPagina">Contactenos</span>
            </td>
            <td>
            <img id="menu" src={image1} height="54" width="54" />
            </td></tr>
            </table>
            <br />
            
           Conactenos...
          
          </article>

        </main>
        <Footer />
      </>
    );
  };


   export default Menu;