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
// const cambiarImagenOff = (id,img) =>{
          
//   document.getElementById(id).src=img;
// };
 

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

 <div className="card" style={{width: '18rem'}}>
  <img src={image_principal} id="plato_pasta" className="card-img-top imagenes_menu_restaurante" alt="Pastas" />
  <div className="card-body">
    <h5 className="card-title">Pastas</h5>
    <p className="card-text">Las pastas mas gratas al paladar hechas al momento y a su gusto.</p>
  </div>

  <ul className="list-group list-group-flush">
  
    <li className="list-group-item">
      <a href="#" 
      onMouseOver={() => cambiarImagenOn('plato_pasta',image_bolonesa)}>
      Bolo&ntilde;esa</a></li>

    <li className="list-group-item">
      <a href="#" 
       onMouseOver={() => cambiarImagenOn('plato_pasta',image_carbonara)}>
       Carbonara</a></li>

    <li className="list-group-item">
      <a href="#" 
       onMouseOver={() => cambiarImagenOn('plato_pasta',image_putanesca)}>
        Putanesca</a></li>

    <li className="list-group-item">
      <a href="#" 
       onMouseOver={() => cambiarImagenOn('plato_pasta',image_ravioli)}>
        Ravioli</a></li>


  </ul>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src={image_pizza_margarita} id="plato_pizza" className="card-img-top imagenes_menu_restaurante" alt="Pizzas" />
  <div className="card-body">
    <h5 className="card-title">Pizzas</h5>
    <p className="card-text">Los distintos sabores en una textura crugiente en una pizza.</p>
  </div>

  <ul className="list-group list-group-flush">
  
    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('plato_pizza',image_pizza_cuatro_estaciones)}>
    4 Estaciones</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('plato_pizza',image_pizza_funghi)}>
    Funghi</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('plato_pizza',image_pizza_margarita)}>
    Margarita</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('plato_pizza',image_pizza_prosciutto)}>
    Prosciutto</a></li>


  </ul>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src={image_piemontese} id="platos_risottos" className="card-img-top imagenes_menu_restaurante" alt="Risottos" />
  <div className="card-body">
    <h5 className="card-title">Risottos</h5>
    <p className="card-text">La cremosidad y sabores marinos en un formato diferente.</p>
  </div>

  <ul className="list-group list-group-flush">
  
    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_risottos',image_alnegro)}>
    Al negro</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_risottos',image_piemontese)}>
    Piemomtese</a></li>
    
  </ul>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src={image_tiramisu} id="platos_postres" className="card-img-top imagenes_menu_restaurante" alt="Postres" />
  <div className="card-body">
    <h5 className="card-title">Postres</h5>
    <p className="card-text">La cremosidad y sabores marinos en un formato diferente.</p>
  </div>

  <ul className="list-group list-group-flush">
  
    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_postres',image_crepnutella)}>
    Crep de Nutella</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_postres',image_gelatotartufo)}>
    Gelato al Tartufo</a></li>
    
    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_postres',image_heladochocolate)}>
    Helado Chocolate</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_postres',image_heladomantecado)}>
    Helado Mantecado</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_postres',image_panacota)}>
    Panacota</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_postres',image_semifredo)}>
    Semifredo</a></li>

    <li className="list-group-item">
    <a href="#"
    onMouseOver={() => cambiarImagenOn('platos_postres',image_tiramisu)}>
    Tiramisu</a></li>
  </ul>
</div>

</div>
            
          </article>        
          
        </main>
        <br />
        <Footer />
      </>
    );
  };


   export default Menu;