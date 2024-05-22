/** @format */

// primeira forma
document.getElementById("titleH1").innerText = "React Pro";

// segunda forma
let div1 = document.createElement("div");
div1.innerHTML = `<p>Aqui está o segundo texto</p>`;
document.getElementsByTagName("body")[0].appendChild(div1);

// terceira forma
document.getElementById("primaryElement").innerText = "Texto inserido pelo ID (3ª forma).";

// quarta forma
let p = document.createElement("p");
p.innerText = "Novo parágrafo adicionado ao body. (4ª forma)";
document.body.appendChild(p);

// quinta forma
let div2 = document.createElement("div");
div2.id = "newElementDiv";
div2.innerText = "Texto no novo elemento com ID (5ª forma).";
document.body.appendChild(div2);

// sexta forma
document.getElementById("primaryElement").innerText += " Texto adicional (6ª forma).";

// sétima forma
document.getElementById("primaryElement").innerHTML = "<strong class='newTextHTML'>Texto inserido como HTML.</strong>";

// oitava forma
document.body.innerHTML += "<div>Div1</div><div>Div2</div>";

// nona forma
let textNode = document.createTextNode("Texto inserido como nó de texto.");
document.getElementById("primaryElement").appendChild(textNode);

// décima forma
window.onload = function () {
  let onloadDiv = document.createElement("div");
  onloadDiv.innerText = "Texto usando o onload do window";
  onloadDiv.className = "newElement";
  document.body.appendChild(onloadDiv);
};

// décima terceira
window.setTimeout(function () {
  let timeoutDiv = document.createElement("div");
  timeoutDiv.innerText = "Texto adicionado após 5 segundos.";
  timeoutDiv.className = "time";
  document.body.appendChild(timeoutDiv);
}, 5000);

// décima quarta
window.alert("Esta é uma mensagem de alerta.");

// décima quinta
if (window.confirm("Você deseja adicionar mais um texto?")) {
  let confirmDiv = document.createElement("div");
  confirmDiv.innerText = "Texto adicionado após confirmação.";
  confirmDiv.className = "alert";
  document.body.appendChild(confirmDiv);
}
