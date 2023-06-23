/************ IMPORTANDO IMAGENES **************************/
import image_reservaciones from "../img/reservaciones.jpg";

/*********** IMPORTANDO COMPONENTES ************************/
import Header from "../components/Header";
import Footer from "../components/Footer";

/*********** IMPORTANDO BASE DE DATOS **********************/
import {db} from "../firebase/firebase";
import {collection, addDoc} from "firebase/firestore";


const Reservaciones = () => {
 
    return (
      <>
        <main className="row">
          <article className="col">

            <Header />
            <br />
            <table><tr><td>
            <span className="tituloPagina">Reservaciones</span>
            </td>
            <td>
            <img id="menu" src={image_reservaciones} height="54" width="54" />
            </td></tr>
            </table>
            <br />
            <form>

            <br />
            <p className="texto"> Por favor ingrese los datos para crear una nueva reservaci&oacute;n. </p>
  <br /> 
                <table align="center">
                    <tr>
                        <td>
                        <label htmlFor="localizadorInput" className="etiquetas">&nbsp;Localizador</label>
                        <input type="text" className="campos" id="localizadorInput" autoComplete="off" disabled /> 
                        </td>
                    
                    
                        <td>
                        
                        <label htmlFor="nombreInput" className="etiquetas">&nbsp;Nombre</label>
                        <input type="text" className="campos" id="nombreInput" autoComplete="off" />
                        <div id="mensaje_nombre" className="mensaje">Por favor ingrese un nombre valido, gracias</div>
                        </td>
                
                        <td>
                        
                        <label htmlFor="apellidoInput" className="etiquetas">&nbsp;Apellido</label>
                        <input type="text" className="campos" id="apellidoInput" autoComplete="off" />
                        <div id="mensaje_apellido" className="mensaje">Por favor ingrese un apellido valido, gracias</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="n_mesasInput" className="etiquetas">&nbsp;N&uacute;mero de Mesas</label>
                        <select name="n_mesasInput" id="n_mesasInput" className="campos">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <div id="mensaje_n_Mesas" className="mensaje">Por favor selecione un n&uacute;mero valido <br />de  mesa, gracias</div>                        
                        </td>
                    
                        <td>
                        
                    <label htmlFor="fechaInput" className="etiquetas">&nbsp;Fecha</label>
                    <input type="date" id="fechaInput" name="fechaInput"  min="2023-01-01" max="2023-12-31" className="campos" />
                    <div id="mensaje_fecha" className="mensaje">Por favor selecione una fecha valida,<br /> gracias</div>
                        </td>
                    
                      <td>
                     
                        <label htmlFor="horaInput" className="etiquetas">&nbsp;Hora</label>
                        <input type="time" id="horaInput" name="horaInput" min="12:00" max="20:00" required className="campos" />
                        <div id="mensaje_hora" className="mensaje">Por favor selecione una hora valida,<br /> gracias</div>
                      </td>
                    </tr>
                    <tr>
                    <td>
                    
                    <label htmlFor="detallesInput" className="etiquetas">&nbsp;Detalles</label>
                    <textarea id="detallesInput" className="campos"></textarea>
                    <div id="mensaje_detalles" className="mensaje">Por favor ingrese un detalle, gracias</div>                         
                    </td>
                    <td colSpan={2} className="celdas_formulario">
                    <input type="button" value="Nueva Reservacion" className="botones_formularios" onClick={generarLocalizador} />  
                    <input type="reset" value="Limpiar Datos" className="botones_formularios" />&nbsp; 
                    <input type="button" value="Enviar" className="botones_formularios" onClick={validarDatos} />
                    </td>
                    </tr>
                </table>
            </form>
            
            <br />
            <Footer /> 
          
          </article>




        </main>
      </>
    );
  };



const validarDatos = () =>{
   

    if(document.getElementById("nombreInput").value==""){
         mensaje_nombre.style.display = "inline";
         document.getElementById("nombreInput").focus();
         return false; 
     } 
     
     else if(document.getElementById("apellidoInput").value==""){
         mensaje_nombre.style.display = "none"; 
         mensaje_apellido.style.display = "inline";
         document.getElementById("apellidoInput").focus();
         return false; 
     }
          
     else if(document.getElementById("n_mesasInput").value=="0"){
        mensaje_nombre.style.display = "none"; 
        mensaje_apellido.style.display = "none";
        mensaje_n_Mesas.style.display = "inline";
        document.getElementById("n_mesasInput").focus();
        return false; 
     }

     else if(document.getElementById("fechaInput").value==""){
        mensaje_nombre.style.display = "none"; 
        mensaje_apellido.style.display = "none";
        mensaje_n_Mesas.style.display = "none";
        mensaje_fecha.style.display = "inline";
        document.getElementById("fechaInput").focus();
        return false; 
     }

     else if(document.getElementById("horaInput").value==""){
        mensaje_nombre.style.display = "none"; 
        mensaje_apellido.style.display = "none";
        mensaje_n_Mesas.style.display = "none";
        mensaje_fecha.style.display = "none";
        mensaje_hora.style.display = "inline";
        document.getElementById("horaInput").focus();
        return false; 
     }
     else if(document.getElementById("detallesInput").value==""){
        mensaje_nombre.style.display = "none"; 
        mensaje_apellido.style.display = "none";
        mensaje_n_Mesas.style.display = "none";
        mensaje_fecha.style.display = "none";
        mensaje_hora.style.display = "none";
        mensaje_detalles.style.display = "inline";
        document.getElementById("detallesInput").focus();
        return false; 
     }

     else{
        
        mensaje_nombre.style.display = "none";
        mensaje_apellido.style.display = "none";
        mensaje_n_Mesas.style.display = "none";
        mensaje_fecha.style.display = "none";
        mensaje_hora.style.display = "none";
        mensaje_detalles.style.display = "none";
        generarLocalizador();
        crearReservacion();
        alert("Se creo la reservacion con exito");
        limpiarDatos();
     }
     
};

const generarLocalizador = () =>{
    document.getElementById("localizadorInput").value = document.getElementById("fechaInput").value +"-"+ 
                                                        document.getElementById("nombreInput").value.toUpperCase().substring(0, 1)+
                                                        document.getElementById("apellidoInput").value.toUpperCase().substring(0, 1);
    
};


const limpiarDatos = () =>{
    document.getElementById("localizadorInput").value="";
    document.getElementById("nombreInput").value="";
    document.getElementById("apellidoInput").value="";
    document.getElementById("n_mesasInput").value="0";
    document.getElementById("fechaInput").value="";
    document.getElementById("horaInput").value="";
    document.getElementById("detallesInput").value="";
};


const crearReservacion = async () =>{

    const reservacion = {
        localizador: document.getElementById("localizadorInput").value.toUpperCase(),
        nombre: document.getElementById("nombreInput").value.toUpperCase(),
        apellido: document.getElementById("apellidoInput").value.toUpperCase(),
        n_mesas: document.getElementById("n_mesasInput").value.toUpperCase(),
        fecha: document.getElementById("fechaInput").value.toUpperCase(),
        hora: document.getElementById("horaInput").value.toUpperCase(),
        detalles: document.getElementById("detallesInput").value.toUpperCase(),

    };

    const coleccionReservaciones = collection(db, "Reservaciones");
    await addDoc(coleccionReservaciones, reservacion);
    //await obtenerReservaciones();

};


export default Reservaciones;