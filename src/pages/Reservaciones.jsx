/************ IMPORTANDO IMAGENES **************************/
import image_reservaciones from "../img/reservaciones.jpg";
import image_logo_tarjetas from "../img/logo_tarjetas.png";
import image_refrescar_registros_on from "../img/refrescarOn.jpg";
import image_refrescar_registros_off from "../img/refrescarOff.jpg";
import image_editar_reservacion from "../img/editar.png";
import image_eliminar_reservacion from "../img/eliminar.png";


/*********** IMPORTANDO COMPONENTES ************************/
import React, {useState} from "react";
import {useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import cambiarImagenOn from "../components/reloadIMG"
//import cambiarImagenOff from "../components/reloadIMG"

/*********** IMPORTANDO BASE DE DATOS **********************/
import {db} from "../firebase/firebase";
import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore";


//** PARA ACTUALIZAR RESERVA */

let idActualizar;


const Reservaciones = () => {

  
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
          
     else if(document.getElementById("n_personasInput").value=="0"){
        limpiarMensajesError();
        document.getElementById("mensaje_n_personas").style.display = "inline";
        document.getElementById("n_personasInput").focus();
    }

     else if(document.getElementById("fechaInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_fecha").style.display = "inline";
        document.getElementById("fechaInput").focus(); 
    }

     else if(document.getElementById("horaInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_hora").style.display = "inline";
        document.getElementById("horaInput").focus(); 
    }
     else if(document.getElementById("detallesInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_detalles").style.display = "inline";
        document.getElementById("detallesInput").focus();         
    }
     else if(document.getElementById("tipoTarjetaInput").value=="SELECCIONE"){
        limpiarMensajesError();
        document.getElementById("mensaje_tipo_tarjeta").style.display = "inline";
        document.getElementById("tipoTarjetaInput").focus(); 
    }
     else if(document.getElementById("numeroTarjetaInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_numeroTarjeta").style.display = "inline";
        document.getElementById("numeroTarjetaInput").focus();
    }
     else if(document.getElementById("fechaVencimientoTarjetaInput").value==""){
        limpiarMensajesError();
        document.getElementById("mensaje_fechaVencimientoTarjeta").style.display = "inline";
        document.getElementById("fechaVencimientoTarjetaInput").focus();
    }
     else{
        crearReservacion();
        alert("Se creo la reservacion con exito, con el número de localizador ( "+ 
              document.getElementById("localizadorInput").value +" ) ");
        limpiarMensajesError();
        limpiarDatos();
        
        
    }
     
};


const crearReservacion = async () =>{
  
  const reservacion = {
    localizador:          values.localizador.toUpperCase(),
    nombre:               values.nombre.toUpperCase(),
    apellido:             values.apellido.toUpperCase(),
    n_personas:           values.n_personas,
    fecha:                values.fecha,
    hora:                 values.hora,
    detalles:             values.detalles.toUpperCase(),
    tipo_tarjeta:         values.tipo_tarjeta.toUpperCase(),
    numero_tarjeta:       values.numero_tarjeta,
    fecha_vence_tarjeta:  values.fecha_vence_tarjeta

};

const coleccionReservaciones = collection(db, "Reservaciones");
await addDoc(coleccionReservaciones, reservacion);
await obtenerReservaciones();

};


const limpiarMensajesError = () =>{

        document.getElementById("mensaje_nombre").style.display = "none";
        document.getElementById("mensaje_apellido").style.display = "none";
        document.getElementById("mensaje_n_personas").style.display = "none";
        document.getElementById("mensaje_fecha").style.display = "none";
        document.getElementById("mensaje_hora").style.display = "none";
        document.getElementById("mensaje_detalles").style.display = "none";
        document.getElementById("mensaje_tipo_tarjeta").style.display = "none";
        document.getElementById("mensaje_numeroTarjeta").style.display = "none";
        document.getElementById("mensaje_fechaVencimientoTarjeta").style.display = "none";

};

const limpiarDatos = () =>{
    
  setValues(estadoInicialValores);
   
};

const generarLocalizador = () =>{
  values.localizador = values.fecha +  "-" + 
  values.nombre.toUpperCase().substring(0, 1) + 
  values.apellido.toUpperCase().substring(0, 1);
  
};


const obtenerReservaciones = async () =>{

  const collectionReservaciones = collection(db, "Reservaciones");
  const reservacionesDB = await getDocs(collectionReservaciones);
  //const reservaciones = reservacionesDB.docs.map((reservacion) => ({

 //       id: reservacion.id,
  
 //       ...reservacion.data(),
  
 //   }));

 //  alert(reservaciones); 
   
  setReservas(reservacionesDB.docs);  

   
};   



useEffect(() => {

  obtenerReservaciones();

},[]);


const editarReservacion =  (id,id_local,nombre,apellido,n_personas,fecha,hora,detalles,tipoTarjeta,numeroTarjeta,fechaVencimientoTarjeta) =>{

  // const coleccion = doc(db, "Reservaciones", id);
  // const data = await   getDocs(coleccion);

  idActualizar=id;
  document.getElementById("btnEnviar").style.display = "none";

  setValues(
       values.localizador =  id_local,
       values.nombre = nombre,
       values.apellido = apellido,
       values.n_personas = n_personas,
       values.fecha = fecha,
       values.hora = hora,
       values.detalles = detalles,
       values.tipo_tarjeta = tipoTarjeta,
       values.numero_tarjeta = numeroTarjeta,
       values.fecha_vence_tarjeta = fechaVencimientoTarjeta);

      
  //     alert(values.localizador);
  
       document.getElementById("localizadorInput").value = values.localizador;
       document.getElementById("nombreInput").value = values.nombre.toUpperCase();
       document.getElementById("apellidoInput").value = values.apellido.toUpperCase();
       document.getElementById("n_personasInput").value = values.n_personas;
       document.getElementById("fechaInput").value = values.fecha;
       document.getElementById("horaInput").value = values.hora;
       document.getElementById("detallesInput").value = values.detalles.toUpperCase();
       document.getElementById("tipoTarjetaInput").value = values.tipo_tarjeta;
       document.getElementById("numeroTarjetaInput").value = values.numero_tarjeta;
       document.getElementById("fechaVencimientoTarjetaInput").value = values.fecha_vence_tarjeta;

       document.getElementById("btnActualizar").style.display="inline";
       
    // setValues(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));

    

};


const actualizarReservacion = async  () =>{
    
    //generarLocalizador();
    const coleccion = doc(db, "Reservaciones", idActualizar);
    await updateDoc(coleccion,values);
    await obtenerReservaciones(); 
    alert("Se actualizo la reservacion con exito, con el número de localizador ( "+ 
              document.getElementById("localizadorInput").value +" ) ");
        limpiarMensajesError();
        limpiarDatos();
        document.getElementById("btnEnviar").style.display = "inline";
        document.getElementById("btnActualizar").style.display="none";

};



const eliminarReservacion = async (id,id_local) => {
  const registro = doc(db, "Reservaciones", id);
  await deleteDoc(registro);
  await obtenerReservaciones();
  alert("se elimino la reserva ( " + id_local + " ) de forma exitosa.");
  limpiarMensajesError();
  limpiarDatos();
};




 //************CAMBIANDO IMAGEN PRINCIPAL CUANDO TIENE EL FOCO ***************/
  const cambiarImagenOn = (id,img) =>{
            
    document.getElementById(id).src=img;
 };

//************CAMBIANDO IMAGEN PRINCIPAL CUANDO PIERDE EL FOCO ***************/
const cambiarImagenOff = (id,img) =>{
          
  document.getElementById(id).src=img;
};


const estadoInicialValores ={
    localizador: '',
    nombre: '',
    apellido: '',
    n_personas: '',
    fecha: '',
    hora: '',
    detalles: '',
    tipo_tarjeta: 'SELECCIONE',
    numero_tarjeta: '',
    fecha_vence_tarjeta: ''
};

//Hooks 

const [reservas, setReservas] = useState([]);

const [values, setValues] = useState(estadoInicialValores);

//Cargando datos al objeto

const handleInputChange = (e) => {
  
  setValues({...values,[e.target.name]: e.target.value});
  
  
};

const handleSubmit = (e) => {
  e.preventDefault();
  
  validarDatos();

};  


const limpiarHoraInput = () =>{
  values.hora="";

};

//***** CAMBIANDO EL COLOR DEL REGISTRO CUANDO SE ESTA SOBRE EL REGISTRO *******//

const cambiar_color_over = (id) => {
  document.getElementById(id).style.backgroundColor ="Pink";

};

//***** CAMBIANDO EL COLOR DEL REGISTRO CUANDO SE ESTA FUERA DEL REGISTRO *******//

const cambiar_color_out = (id) => {
  document.getElementById(id).style.backgroundColor ="rgb(242, 200, 144)"; 
     
};

return (

      <>
      <Header />
        <main className="row" >
          <article className="col">
          <br />
            <span className="tituloPagina">Reservaciones</span>
            <img id="menu" src={image_reservaciones} height="54" width="54" />
     
            <p>Por favor ingrese los datos para crear una nueva reservaci&oacute;n. </p>
            
            <div className="contenedor_reservaciones">
              <form onSubmit={handleSubmit} name="formReserva">
                
                {/* LOCALIZADOR */}

                   <label htmlFor="localizadorInput" className="etiquetas">Localizador</label>

                   <input 
                   type="text" 
                   className="campos" 
                   id="localizadorInput" 
                   autoComplete="off" 
                   name="localizador"
                   value={values.localizador}
                   onChange={handleInputChange}
                   disabled />
      
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
              
                {/* NUMERO DE PERSONAS */}

                   <label htmlFor="n_personasInput" className="etiquetas">&nbsp;N&uacute;mero de Personas</label>
                   
                   <select 
                   id="n_personasInput"  
                   className="campos" 
                   name="n_personas"
                   value={values.n_personas}
                   onChange={handleInputChange} >

                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option> 
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>                            
                    </select>

                    <div id="mensaje_n_personas" className="mensaje">Por favor selecione un n&uacute;mero valido <br />de  personas, gracias</div>

                {/* FECHA */}
                        
                    <label htmlFor="fechaInput" className="etiquetas">&nbsp;Fecha</label>
                    
                    <input 
                    type="date" 
                    id="fechaInput"   
                    min="2023-01-01" 
                    max="2023-12-31" 
                    className="campos" 
                    name="fecha"
                    value={values.fecha}
                    onChange={handleInputChange} 
                    onClick={limpiarHoraInput} />
                    
                    <div id="mensaje_fecha" className="mensaje">Por favor selecione una fecha valida,<br /> gracias</div>

                {/* HORA */}
          
                    <label htmlFor="horaInput" className="etiquetas">&nbsp;Hora</label>
                    
                    <input 
                    type="time" 
                    id="horaInput"  
                    min="12:00" 
                    max="20:00" 
                    className="campos" 
                    name="hora"
                    value={values.hora}
                    onClick={generarLocalizador} 
                    onChange={handleInputChange} />
                    
                    <div id="mensaje_hora" className="mensaje">Por favor selecione una hora valida, entre<br />
                                                               las 12:00 pm y las 08:00 pm gracias</div>
          
                {/* DETALLES */}

                    <label htmlFor="detallesInput" className="etiquetas">&nbsp;Detalles</label>
                    <textarea 
                    id="detallesInput"  
                    className="campos" 
                    placeholder="Especifique en breves palabras algún detalle a considerar." 
                    name="detalles"
                    value={values.detalles}
                    onChange={handleInputChange}></textarea>
                    <div id="mensaje_detalles" className="mensaje">Por favor ingrese un detalle, gracias</div>

                {/* TIPO DE TARJETA */}

                    <label htmlFor="tipoTarjetaInput" className="etiquetas">&nbsp;Tipo de Tarjeta</label>
                    <img id="logoTarjetas" name="logoTarjetas" src={image_logo_tarjetas} height="30" width="88" />

                    <select 
                    id="tipoTarjetaInput"  
                    className="campos" 
                    name="tipo_tarjeta"
                    value={values.tipo_tarjeta}
                    onChange={handleInputChange}>
                      <option value="SELECCIONE">SELECCIONE</option>
                      <option value="DEBIT-MASTER">DEBIT-MASTER</option>
                      <option value="DEBIT-VISA">DEBIT-VISA</option>
                      <option value="CREDITO-MASTER">CREDITO-MASTER</option>
                      <option value="CREDITO-VISA">CREDITO-VISA</option>                            
                    </select>
                    <div id="mensaje_tipo_tarjeta" className="mensaje">Por favor selecione un tipo de tarjeta valida,<br /> gracias</div>
                
                {/* NUMERO DE TARJETA */}

                    <label htmlFor="numeroTarjetaInput" className="etiquetas">&nbsp;N&uacute;mero de Tarjeta</label>
                    <input 
                    type="number" 
                    id="numeroTarjetaInput"  
                    className="campos"  
                    name="numero_tarjeta"
                    value={values.numero_tarjeta}
                    onChange={handleInputChange} />
                    <div id="mensaje_numeroTarjeta" className="mensaje">Por favor ingrese un n&uacute;mero de tarjeta valido,<br /> gracias</div>
                
                {/* FECHA DE VENCIMIENTO DE TARJETA */}
                      
                    <label htmlFor="fechaVencimientoTarjetaInput" className="etiquetas">&nbsp;Fecha de vencimiento de la Tarjeta</label>
                    <input type="date" id="fechaVencimientoTarjetaInput"   
                    min="2023-01-01" 
                    max="2023-12-31" 
                    className="campos" 
                    name="fecha_vence_tarjeta"
                    value={values.fecha_vence_tarjeta}
                    onChange={handleInputChange} />
                    <div id="mensaje_fechaVencimientoTarjeta" className="mensaje">Por favor selecione una fecha valida,<br /> gracias</div>
           
                    <br />

                    <input type="reset" value="Limpiar Datos" className="botones_formularios" />&nbsp; 
                    <input type="submit" value="Enviar" className="botones_formularios" id="btnEnviar"  />&nbsp;
                    
                    <input type="button" value="Actualizar" 
                    className="boton_actualizar"   
                    id="btnActualizar"  
                    onClick={actualizarReservacion} />
                    <br /><br />

                     <a href="#registros">Ver Reservas</a>
                  
              </form> 
              
              <div > 
               
              <a href="#" 
              onMouseOver={() => cambiarImagenOn('refrescar',image_refrescar_registros_on)}
              onMouseOut={() => cambiarImagenOff('refrescar',image_refrescar_registros_off)}
              onClick={obtenerReservaciones}>
              
              <img src={image_refrescar_registros_off}  
                id="refrescar"
                height="56" 
                width="56" 
                border="0" 
                alt="Refrescar Registros"></img>
                <br />Refrescar registros
                </a>
             
              </div>


              <div>  
                <a name="registros"></a>

              <table>
                <thead>
                  <tr>
                    <th scope="col" className="titulo_columnas_tabla">Localizador</th>
                    <th scope="col" className="titulo_columnas_tabla">Fecha</th>
                    <th scope="col" className="titulo_columnas_tabla">Hora</th>
                    <th scope="col" className="titulo_columnas_tabla">Operaciones</th>
                  </tr>
                </thead>
               
               {reservas.map(reserva => {

                const txt_localizador = reserva.data().localizador;

                  return(
                    
                  <>
                  <tr 
                        className="registros" 
                        id={reserva.id}
                     onMouseOver={() => cambiar_color_over(reserva.id)} 
                     onMouseOut={() => cambiar_color_out(reserva.id)}>
                      
                             <td>{txt_localizador}</td>
                             <td>{reserva.data().fecha}</td>
                             <td>{reserva.data().hora}</td>
                             <td>
                              
                              <img src={image_editar_reservacion} className="imagenes_registro" alt="Editar Reservación"  
                              onClick={() => {editarReservacion(
                                
                                
                                reserva.id,
                                txt_localizador,
                                reserva.data().nombre,
                                reserva.data().apellido,
                                reserva.data().n_personas,
                                reserva.data().fecha,
                                reserva.data().hora,
                                reserva.data().detalles,
                                reserva.data().tipo_tarjeta,
                                reserva.data().numero_tarjeta,
                                reserva.data().fecha_vence_tarjeta

                              
                              )}} />

                            

                              <a href="#">
                              <img src={image_eliminar_reservacion} className="imagenes_registro" alt="Eliminar Reservación"
                              onClick={() => {eliminarReservacion(reserva.id,reserva.data().localizador)}}
                              
                              /></a>
                            </td>
                                        
                         </tr>
                    </>      
                  )
                    })}
            </table>
            </div> 
          </div>   
         </article></main>
        <br />
        <Footer />
        
      </>      
    );   
  };
  
 
 
export default Reservaciones;

//window.addEventListener("load",await Reservaciones.obtenerReservaciones);