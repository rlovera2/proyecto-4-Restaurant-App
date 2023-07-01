  //************CAMBIANDO IMAGEN PRINCIPAL CUANDO TIENE EL FOCO ***************/
  const cambiarImagenOn = (id,img) =>{
            
    document.getElementById(id).src=img;
 };

//************CAMBIANDO IMAGEN PRINCIPAL CUANDO PIERDE EL FOCO ***************/
const cambiarImagenOff = (id,img) =>{
          
  document.getElementById(id).src=img;
};

export { cambiarImagenOn,cambiarImagenOff };
