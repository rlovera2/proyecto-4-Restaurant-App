 import image1 from "../img/icono_menu.jpg";
 import image_principal from "../img/sombrero-menu.jpg";
 import image_bolonesa from "../img/Tagliatelle-al-ragu-alla-Bolognese.jpg";
 import image_carbonara from "../img/carbonara.jpg";
 import image_putanesca from "../img/putanesca.jpg";
 import image_ravioli from "../img/Ravioli-53.jpg";
 import image_piemontese from "../img/risoto-piemontese.jpg";
 import image_alnegro from "../img/risono-al-negro.jpg";
 import image_heladomantecado from "../img/helado-mantecado.jpg";
 import image_heladochocolate from "../img/helado-chocolate.jpg";
 import image_semifredo from "../img/semifredo.jpg";
 import image_gelatotartufo from "../img/gelato-tartufo.jpg";
 import image_crepnutella from "../img/crep-nutella.jpg";
 import image_panacota from "../img/panacota.jpg";
 import image_tiramisu from "../img/tiramisu.jpg";
 import image_pizza_cuatro_estaciones from "../img/pizza-cuatro-estaciones.jpg";
 import image_pizza_margarita from "../img/pizza-margarita.jpg";
 import image_pizza_funghi from "../img/pizza-funghi.jpg";
 import image_pizza_prosciutto from "../img/pizza-prosciutto.jpg";
 

import Header from "../components/Header";
import Footer from "../components/Footer";


const Menu = () => {

// const propiedades  = () => {
//   return(
// <div>
//   <pastas nombre="Bolonesa" />
//   <pastas nombre="Carbonara" />
// </div>
//   );
// }

// const imprimirMenu = (props) => {
//     return(
//       <div>
//       Nombre: {props.nombre}
//       </div>
//     );

// }

  //************CAMBIANDO IMAGEN PRINCIPAL CUANDO TIENE EL FOCO ***************/
  const cambiarImagenOn = (id,img) =>{
            
    document.getElementById(id).src=img;
 };

//************CAMBIANDO IMAGEN PRINCIPAL CUANDO PIERDE EL FOCO ***************/
const cambiarImagenOff = (id,img) =>{
          
  document.getElementById(id).src=img;
};
 

return (
      <>
      <Header />
        <main className="row">
          <article className="col">
         

            <br />
            <table><tr><td>
            <span className="tituloPagina">Menu</span>
            </td>
            <td>
            <img id="menu" src={image1} height="54" width="54" />
            </td></tr>
            </table>
            <br />
            {/* {imprimirMenu} */}
            
          <div className="contenedor_menu">
            <table>
                <tr><td className="celdas_tabla_menu">
                  <span className="subtituloTabla">
                    Pastas
                  </span>
             <ul>
                <li>
                  <a href="#" 
                 onMouseOver={() => cambiarImagenOn('platos_fuertes',image_bolonesa)}>
                 Bolo&ntilde;esa</a></li>

                <li>
                <a href="#" 
                 onMouseOver={() => cambiarImagenOn('platos_fuertes',image_carbonara)}>
                 Carbonara</a></li>

                <li>
                <a href="#" 
                 onMouseOver={() => cambiarImagenOn('platos_fuertes',image_putanesca)}>
                  Putanesca</a></li>

                <li>
                  <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_ravioli)}>
                  Ravioli</a></li>
            </ul>
            </td>
            <td className="celdas_tabla_menu">
              <span className="subtituloTabla">
                Pizzas
              </span>
            <ul>
                <li>
                  <a href="#"
                  onMouseOver={() => cambiarImagenOn('platos_fuertes',image_pizza_cuatro_estaciones)}>
                  4 Estaciones</a></li>

                  <li>
                <a href="#"
                  onMouseOver={() => cambiarImagenOn('platos_fuertes',image_pizza_funghi)}>
                  Funghi</a></li>

                <li>
                <a href="#"
                  onMouseOver={() => cambiarImagenOn('platos_fuertes',image_pizza_margarita)}>
                  Margarita</a></li>

                  <li>
                <a href="#"
                  onMouseOver={() => cambiarImagenOn('platos_fuertes',image_pizza_prosciutto)}>
                  Prosciutto</a></li>
 

            </ul>    
     
          </td>

            <td className="celdas_tabla_menu">
              <span className="subtituloTabla">
                Risottos
              </span>
            <ul>
                <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_alnegro)}>
                  Al negro</a></li>

                <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_piemontese)}>
                  Piemomtese</a></li>


            </ul>
            </td>
            
            <td className="celdas_tabla_menu">
            <span className="subtituloTabla">
              Postres
            </span>
            <ul>
               <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_crepnutella)}>
                  Crep de Nutella</a></li>

               <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_gelatotartufo)}>
                  Gelato al Tartufo</a></li>   

                <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_heladochocolate)}>
                  Helado Chocolate</a></li>

               <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_heladomantecado)}>
                  Helado Mantecado</a></li>

               <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_panacota)}>
                  Panacota</a></li>

               <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_semifredo)}>
                  Semifredo</a></li>

               <li>
                <a href="#"
                onMouseOver={() => cambiarImagenOn('platos_fuertes',image_tiramisu)}>
                  Tiramisu</a></li>
              
            </ul>

            </td></tr>
            </table>
            <img id="platos_fuertes" src={image_principal} height="215" width="275" className="imagenes_menu"/>
            </div>
            
          </article>        
          
        </main>
        <br />
        <Footer />
      </>
    );
  };


   export default Menu;