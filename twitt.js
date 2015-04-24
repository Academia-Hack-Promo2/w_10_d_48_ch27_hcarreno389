


function tabla() {

  var body = document.getElementsByTagName("body")[0];
  var titulo   = document.createElement("div");
  var textoCelda = document.createTextNode("Twitts");
  titulo.appendChild(textoCelda);
  var c_twitt = document.createElement("div")
  var twitt_new = document.createElement("button");
  var tletra = document.createTextNode("Publicar Twitt");
  var barra = document.createElement("input");
  c_twitt.appendChild(barra);

  // var twitt = document.getElementsByTagName("input")[0].value;
  // console.log(twitt);
  twitt_new.onclick = function(){
    var twitts = document.createElement("div");
    console.log(twitts);
    var twitt = document.createTextNode(barra.value);
    twitts.appendChild(twitt);
    //twitts.innerHTML(barra.value);
  console.log(barra.value);
   
  body.appendChild(twitts);

  };

 
 
  
  body.appendChild(titulo);
  twitt_new.appendChild(tletra);
  body.appendChild(twitt_new);
  body.appendChild(c_twitt);
  titulo.setAttribute("border", "3");
  
}
tabla();
