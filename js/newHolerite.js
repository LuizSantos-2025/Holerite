
var day = document.querySelector("#dark");

day.addEventListener("click", function() {
document.body.classList.toggle("darkMode");
console.log("Night Ativado");

day.classList.add("hide");
if(("hide")){
    night.classList.remove("hide");
}
})
var night = document.querySelector("#light");
night.addEventListener("click", function(){
document.body.classList.toggle("darkMode");

console.log("Light Ativado");
night.classList.add("hide");
if(("hide")){
    day.classList.remove("hide");
}
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

alert("Verificar sobre esses valores, pois atende com aliquota de 14%,  sendo 8157,41 o teto" ); 
}
});

//// FUNCOES

function salarioMinimo(salario){  
    if(salario === '' || salario == 0){
    console.log("Insira um valor valido")
}else{
    

    // SalarioFamilia();

var arr = [0.075, 0.09, 0.12, 0.14];
var liquido = salario - (salario*arr[0]);
console.log(liquido);

var body = document.querySelector("body");

var containerVazio = document.querySelector("#vazio");

var criaDiv = document.createElement("div");
criaDiv.setAttribute("class","firstAliquota");

var criaP  = document.createElement("p");
var criaP2 = document.createElement("p");
var criaP3 = document.createElement("p");
var criaP4 = document.createElement("p");
criaP4.setAttribute("class","valorLiquido");

var criaNo = document.createTextNode("Salario: R$ "+ salario);
var criaNo2 = document.createTextNode("Desconto Inss: "+ (salario*arr[0]).toFixed(2));
var criaNo3 = document.createTextNode("Aliquota R$ 7,5%");
var criaNo4 = document.createTextNode("Liquido R$ " +liquido);

criaDiv.appendChild(criaP);
criaDiv.appendChild(criaP2);
criaDiv.appendChild(criaP3);
criaDiv.appendChild(criaP4);
criaP.appendChild(criaNo);
criaP2.appendChild(criaNo2);
criaP3.appendChild(criaNo3);
criaP4.appendChild(criaNo4);
containerVazio.appendChild(criaDiv);
body.appendChild(containerVazio);

}
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

function SalarioFamilia(salario){ 

console.log("Tem direito a salario familia");

var SalarioFamilia = 65;



}



