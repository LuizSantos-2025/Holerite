

var btn = document.querySelector(".bi-moon-stars");

btn.addEventListener("click", function(){
    console.log(btn);
    document.body.toogle("hide");
})


// Mapeando o icone darkMode
var dark = document.querySelector("#dark");


// criando um evento de click no icone de darkMode
dark.addEventListener("click", function(){

// ativando a classe darkMode apos o click no icone
document.body.classList = ("darkMode");
// console.log("ativado modo Dark");

});

// Mesma descrição acima
var light = document.querySelector("#light");
light.addEventListener("click", function(){
    console.log("teste");
   document.body.classList = ("lightMode");
})

// Mapeando o submit do input
var sub = document.querySelector("#sub");

// Criando um evento de click no submit do input
sub.addEventListener("click", function () {

// Mapeando o input e atribuindo o valor digitado no input a variavel salario
var salario = document.querySelector("#inputt").value;

// Teste condicional se o salario for menor ou igual a 1518.00
if(salario <= 1518.00){
sal = salarioMinimo(salario);
}

// Teste condicional se o salario esta entre os valores citados 
else if(salario > 1518.00 && salario <= 2793.88) {
salMedio = salarioMedio(salario);
}

// Teste condicional se o salario esta entre os valores citados
else if(salario > 2793.88 && salario <= 4190.83){
console.log("teste aliquota12%");
salAlto = salarioAlto(salario);
}

// Teste condicional se o salario esta entre os valores citados
else if(salario > 4190.83 && salario <= 8157.41) {
console.log("teto");
teto = tetoMax(salario);
}
// Teste condicional se o salario esta entre os valores citados
else {

alert("Verificar sobre esses valores, pois atendo com aliquota de 14%,  sendo 8157,41 o teto" ); 
}
});

//// FUNCOES
function salarioMinimo(salario){  

var arr = [0.075, 0.09, 0.12, 0.14];

var body = document.querySelector("body");

var containerVazio = document.querySelector("#vazio");

var criaDiv = document.createElement("div");
criaDiv.setAttribute("class","firstAliquota");

var criaP  = document.createElement("p");
var criaP2 = document.createElement("p");
var criaP3 = document.createElement("p");

var criaNo = document.createTextNode("Salario: R$ "+ salario);
var criaNo2 = document.createTextNode("Desconto Inss: "+ (salario*arr[0]).toFixed(2));
var criaNo3 = document.createTextNode("Aliquota R$ 7,5%");



criaDiv.appendChild(criaP);
criaDiv.appendChild(criaP2);
criaDiv.appendChild(criaP3);
criaP.appendChild(criaNo);
criaP2.appendChild(criaNo2);
criaP3.appendChild(criaNo3);
containerVazio.appendChild(criaDiv);
body.appendChild(containerVazio);
}
function salarioMedio(salario){

var arr = [0.075, 0.09, 0.12, 0.14];

var body = document.querySelector("body");

var containerVazio = document.querySelector("#vazio");

var criaDiv = document.createElement("div");
criaDiv.setAttribute("class","firstAliquota");

var criaP  = document.createElement("p");
var criaP2 = document.createElement("p");
var criaP3 = document.createElement("p");

var criaNo = document.createTextNode("Salario: R$ "+ salario);
var criaNo2 = document.createTextNode("Desconto Inss: "+ (salario*arr[1]).toFixed(2));
var criaNo3 = document.createTextNode("Aliquota R$ 9%");

criaDiv.appendChild(criaP);
criaDiv.appendChild(criaP2);
criaDiv.appendChild(criaP3);
criaP.appendChild(criaNo);
criaP2.appendChild(criaNo2);
criaP3.appendChild(criaNo3);
containerVazio.appendChild(criaDiv);
body.appendChild(containerVazio);
}

function salarioAlto(salario){
var arr = [0.075, 0.09, 0.12, 0.14];

var body = document.querySelector("body");

var containerVazio = document.querySelector("#vazio");

var criaDiv = document.createElement("div");
criaDiv.setAttribute("class","firstAliquota");

var criaP  = document.createElement("p");
var criaP2 = document.createElement("p");
var criaP3 = document.createElement("p");

var criaNo = document.createTextNode("Salario: R$ "+ salario);
var criaNo2 = document.createTextNode("Desconto Inss: "+ (salario*arr[2]).toFixed(2));
var criaNo3 = document.createTextNode("Aliquota R$ 12%");

criaDiv.appendChild(criaP);
criaDiv.appendChild(criaP2);
criaDiv.appendChild(criaP3);
criaP.appendChild(criaNo);
criaP2.appendChild(criaNo2);
criaP3.appendChild(criaNo3);
containerVazio.appendChild(criaDiv);
body.appendChild(containerVazio);
}

function tetoMax(salario) {
var arr = [0.075, 0.09, 0.12, 0.14];

var body = document.querySelector("body");

var containerVazio = document.querySelector("#vazio");

var criaDiv = document.createElement("div");
criaDiv.setAttribute("class","firstAliquota");

var criaP  = document.createElement("p");
var criaP2 = document.createElement("p");
var criaP3 = document.createElement("p");

var criaNo = document.createTextNode("Salario: R$ "+ salario);
var criaNo2 = document.createTextNode("Desconto Inss: "+ (salario*arr[3]).toFixed(2));
var criaNo3 = document.createTextNode("Aliquota R$ 14%");

criaDiv.appendChild(criaP);
criaDiv.appendChild(criaP2);
criaDiv.appendChild(criaP3);
criaP.appendChild(criaNo);
criaP2.appendChild(criaNo2);
criaP3.appendChild(criaNo3);
containerVazio.appendChild(criaDiv);
body.appendChild(containerVazio);
}





