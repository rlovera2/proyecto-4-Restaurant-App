
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
import Header from "../components/Header";
import Footer from "../components/Footer";


const HomePage = () => {
    return (
      <>
        <main className="row contenedor_principal">

        <Header />
          <article className="contenedor_principal">Bienvenidos a tu restaurante La Pasta</article>
        
          <article className="col contenedor_principal">
        
            <img id="platos_fuertes" src={image_ragu} className="imagenes_home"  
            onMouseOver={() => cambiarImagenOn('platos_fuertes',image_pizza)}  
            onMouseOut={() => cambiarImagenOff('platos_fuertes',image_ragu)} />

            <img id="postres" src={image_tiramisu} className="imagenes_home" 
            onMouseOver={() => cambiarImagenOn('postres',image_panacota)} 
            onMouseOut={() => cambiarImagenOff('postres',image_tiramisu)} />
    
          </article>
        <section className="contenedor_principal">
        <img id="facebook" src={image_facebook} className="imagenes_redes"  />
        <img id="instagram" src={image_instagram} className="imagenes_redes"   />
        <img id="whatsapp" src={image_whatsapp} className="imagenes_redes"  />
        <img id="map" src={image_map} className="imagenes_redes"  />
        </section>
          <Footer />
        </main>
      </>
    );
  };


  //************CAMBIANDO IMAGEN PRINCIPAL CUANDO TIENE EL FOCO ***************/
   const cambiarImagenOn = (id,img) =>{
            
      document.getElementById(id).src=img;
   };

  //************CAMBIANDO IMAGEN PRINCIPAL CUANDO PIERDE EL FOCO ***************/
  const cambiarImagenOff = (id,img) =>{
            
    document.getElementById(id).src=img;
 };



export default HomePage;