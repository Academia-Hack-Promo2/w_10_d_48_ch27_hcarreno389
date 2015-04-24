usuarios = new Array;
usuario = new Array;


function tabla() {

  var body = document.getElementsByTagName("body")[0];
  var titulo   = document.createElement("div");
  var textoCelda = document.createTextNode("Twitts");
  titulo.appendChild(textoCelda);
  
  var c_twitt = document.createElement("div")
  var twitt_new = document.createElement("button");
  var tletra = document.createTextNode("Publicar Twitt");
  var barra = document.createElement("text");
  c_twitt.appendChild(barra);

 
 
  
  body.appendChild(titulo);
  twitt_new.appendChild(tletra);
  body.appendChild(twitt_new);
  titulo.setAttribute("border", "3");
}
tabla();
console.log(usuario);