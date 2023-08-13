
//************** IMPORTANDO IMAGENES *******************//

import image_ragu from "../img/Tagliatelle-al-ragu-alla-Bolognese.jpg";
import image_pizza from "../img/PizzaCollage_Lead.jpg";
import image_tiramisu from "../img/tiramisu.jpg";
import image_panacota from "../img/panacota.jpg";
import image_facebook from "../img/facebook.jpg";
import image_instagram from "../img/instagram.jpg";
import image_whatsapp from "../img/whatsapp.jpg";
import image_map from "../img/map.png"

//************** IMPORTANDO COMPONENTES *******************//
//import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import cambiarImagenOn from "../components/reloadIMG"
//import cambiarImagenOff from "../components/reloadIMG"


const HomePage = () => {


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
          
          <div className="texto_Home">
          <br /> 
        
        <table align="center"><tr><td>

          <marquee>
          Bienvenidos a tu restante la pasta...
          </marquee>

          </td></tr></table>
        
          <br /><br />

          </div>
          
          <div className="contenedor_principal">
            
            <img id="platos_fuertes" src={image_ragu} className="imagenes_home"  
            onMouseOver={() => cambiarImagenOn('platos_fuertes',image_pizza)}  
            onMouseOut={() => cambiarImagenOff('platos_fuertes',image_ragu)} />

            <img id="postres" src={image_tiramisu} className="imagenes_home" 
            onMouseOver={() => cambiarImagenOn('postres',image_panacota)} 
            onMouseOut={() => cambiarImagenOff('postres',image_tiramisu)} />
          
          </div>


          <div className="contenedor_principal">
          <hr className="linea_divisoria" />
          </div>


          <div className="contenedor_redes">
          <br/>     

        <img id="facebook" src={image_facebook} className="imagenes_redes"  />
        <img id="instagram" src={image_instagram} className="imagenes_redes"   />
        <img id="whatsapp" src={image_whatsapp} className="imagenes_redes"  />
        <img id="map" src={image_map} className="imagenes_redes"  />
        <br/>  <br/>
        </div>
        </article>
          
        </main>
        <Footer />
      </>
    );
  };


export default HomePage;