/****** IMPORTANDO IMAGENES  **************/
import image1 from "../img/@.jpg";

/********* IMPORTANDO COMPONENTES *********/
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useState} from "react";

/*********** IMPORTANDO BASE DE DATOS **********************/
import {db} from "../firebase/firebase";
import {collection, addDoc, getDocs, doc, updateDoc} from "firebase/firestore";


const Contactenos = () => {

  const estadoInicialValores ={
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    motivo: '',
    fecha: ''
  
};


const [values, setValues] = useState(estadoInicialValores);


  const handleInputChange = (e) => {
  
    setValues({...values,[e.target.name]: e.target.value});
    
    
  };
  
  const validarDatos = () =>{
    

    if(document.getElementById("nombreInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_nombre").style.display = "inline";
        document.getElementById("nombreInput").focus();
 
    } 
     
     else if(document.getElementById("apellidoInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_apellido").style.display = "inline";
        document.getElementById("apellidoInput").focus();
    }
          
     else if(document.getElementById("telefonoInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_telefono").style.display = "inline";
        document.getElementById("telefonoInput").focus();
    }

     else if(document.getElementById("emailInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_email").style.display = "inline";
        document.getElementById("emailInput").focus(); 
    }

    
     else if(document.getElementById("motivoInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_motivo").style.display = "inline";
        document.getElementById("motivoInput").focus();         
    }

    else{
      crearMensaje();
      alert("Gracias por contactarnos sus comentarios son importantes para nosotros pronto nos pondremos en contacto con usted.");
      limpiarMensajesError();
      limpiarDatos();
    }

  };


  const limpiarMensajesError = () =>{

    document.getElementById("mensaje_nombre").style.display = "none";
    document.getElementById("mensaje_apellido").style.display = "none";
    document.getElementById("mensaje_telefono").style.display = "none";
    document.getElementById("mensaje_email").style.display = "none";
    document.getElementById("mensaje_motivo").style.display = "none";

  };


  
const limpiarDatos = () =>{

  setValues(estadoInicialValores);
  
};


  const crearMensaje = async () =>{
  
    let fecha = new Date()
        
    const mensaje = {
        nombre:               values.nombre.toUpperCase(),
        apellido:             values.apellido.toUpperCase(),
        telefono:             values.telefono,
        email:                values.email,
        motivo:               values.motivo.toUpperCase(),
        fecha:                fecha
          
    };
  
    const coleccionContactenos = collection(db, "Contactenos");
    await addDoc(coleccionContactenos, mensaje);
    // await obtenerMensajes();
  
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    validarDatos();
  
  };  
  

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
            
           Para cualquier informacion adicional no dude en contactarnos para ello puede llenar el formulario acotinuanci&oacute;n...
           <br /><br />
          </article>
          <article>
        <div className="contenedor_reservaciones">
        <form onSubmit={handleSubmit}>

            {/* NOMBRE */}
                        
                   <label htmlFor="nombreInput" className="etiquetas">Nombre</label>
                  
                   <input 
                   type="text" 
                   className="campos" 
                   id="nombreInput"  
                   autoComplete="off" 
                   name="nombre"
                   value={values.nombre}
                   onChange={handleInputChange} />
                  
                   <div id="mensaje_nombre" className="mensaje">Por favor ingrese un nombre valido, gracias</div>
                
            {/* APELLIDO */}

                   <label htmlFor="apellidoInput" className="etiquetas">&nbsp;Apellido</label>
                  
                   <input 
                   type="text" 
                   className="campos" 
                   id="apellidoInput"  
                   autoComplete="off" 
                   name="apellido"
                   value={values.apellido}
                   onChange={handleInputChange} />
                  
                   <div id="mensaje_apellido" className="mensaje">Por favor ingrese un apellido valido, gracias</div>

            {/* TELEFONO */}

                   <label htmlFor="telefonoInput" className="etiquetas">&nbsp;Tel&eacute;fono</label>
                   <input 
                   type="text" 
                   className="campos" 
                   id="telefonoInput"  
                   autoComplete="off" 
                   name="telefono"
                   value={values.telefono}
                   onChange={handleInputChange} />
                   
                   <div id="mensaje_telefono" className="mensaje">Por favor ingrese un tel&eacute;fono valido, gracias</div>

            {/* EMAIL */}

                   <label htmlFor="emailInput" className="etiquetas">&nbsp;Email</label>
                   
                   <input 
                   type="text" 
                   className="campos" 
                   id="emailInput"  
                   autoComplete="off" 
                   name="email"
                   value={values.email}
                   onChange={handleInputChange} />
                  
                   <div id="mensaje_email" className="mensaje">Por favor ingrese un e-mail valido, gracias</div>
          
          {/* MOTIVO */}

                   <label htmlFor="motivoInput" className="etiquetas">&nbsp;Motivo</label>

                   <input 
                   type="text" 
                   className="campos" 
                   id="motivoInput"  
                   autoComplete="off" 
                   name="motivo"
                   value={values.motivo} 
                   onChange={handleInputChange} />
                  
                   <div id="mensaje_motivo" className="mensaje">Por favor ingrese un motivo valido, gracias</div>


        <br />

                <input type="reset" value="Limpiar Datos" className="botones_formularios" />&nbsp; 
                <input type="submit" value="Enviar" className="botones_formularios" />
                
        </form>
        
        <br /><br />
        </div>
          </article>
        </main>
        <br />
        <Footer />
      </>
    );
  };


   export default Contactenos;