const luz = document.getElementById("luz");

window.onmousemove = e => {
    const x = e.clientX - luz.offsetWidth / 2,
        y = e.clientY - luz.offsetHeight / 2;

    const keyframes ={
        transform: `translate(${x}px, ${y}px)`
    }

    luz.animate(keyframes, {
        duration: 450,
        fill: "forwards"
    })
}


class Proyecto {
    constructor(título, descripción){
        this.título = título;
        this.descripción = descripción;
    }
}
let proj = new Proyecto("Ojo","Dibujo de ojo humano");
let proj0 = new Proyecto("Boca","Dibujo de boca humana");
let proj1 = new Proyecto("Portafolio-1","Primer portafolio personal");
let proj2 = new Proyecto("Portafolio-2","Segundo portafolio personal");
let proj3 = new Proyecto("Portafolio-3","Tercer portafolio personal");
let txt1=document.getElementById("ojoli1")
let txt2=document.getElementById("ojoli2")
txt1.innerHTML=proj.título
txt2.innerHTML=proj.descripción
let txt3=document.getElementById("bocali1")
let txt4=document.getElementById("bocali2")
txt3.innerHTML=proj0.título
txt4.innerHTML=proj0.descripción
let txt5=document.getElementById("p1li1")
let txt6=document.getElementById("p1li2")
txt5.innerHTML=proj1.título
txt6.innerHTML=proj1.descripción
let txt7=document.getElementById("p2li1")
let txt8=document.getElementById("p2li2")
txt7.innerHTML=proj2.título
txt8.innerHTML=proj2.descripción
let txt9=document.getElementById("p3li1")
let txt10=document.getElementById("p3li2")
txt9.innerHTML=proj3.título
txt10.innerHTML=proj3.descripción


function Enviar(){
    var nombre=document.getElementById('nombre').value;
    var apellido=document.getElementById('apellido').value;
    var correo=document.getElementById('correo').value;
    var mensaje=document.getElementById('mensaje').value;
    if (nombre==""){
        alert("Para enviar su formulario, por favor, ingrese su nombre")
        document.getElementById('nombre').focus();
        }
        else if (apellido==""){
        alert("Para enviar su formulario, por favor, ingrese su apellido")
        document.getElementById('apellido').focus();
        }
        else if (correo==""){
        alert("Para enviar su formulario, por favor, ingrese su correo")
        document.getElementById('correo').focus();
        }
        else if (mensaje==""){
        alert("Para enviar su formulario, por favor, ingrese su mensaje")
        document.getElementById('mensaje').focus();
        }
}

function Cancelar(){
    var nombre=document.getElementById('nombre').value="";
    var apellido=document.getElementById('apellido').value="";
    var correo=document.getElementById('correo').value="";
    var mensaje=document.getElementById('mensaje').value="";
    document.getElementById('nombre').focus();
}

const Alerta = () => {
    alert("Bienvenido usuario al sitio web!!");
}
setTimeout(Alerta, 0500);

function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
  
    const msj = document.getElementById("infform")
    const mensaje = document.createElement("p");
    msj.appendChild(mensaje);
    mensaje.innerText = `Gracias ${nombre} ${apellido} por tu mensaje, en breve recibirás una respuesta.`;
  }
  const boton = document.getElementById("Enviarbt");
  boton.addEventListener("click", enviarFormulario);