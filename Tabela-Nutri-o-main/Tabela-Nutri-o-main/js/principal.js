//Este bloco altera o subtitulo e o titulo//
var pacientes = document.querySelector(".titulo-secundario");
pacientes.textContent = "Meus Fiés";
var titulo = document.querySelector(".titulo");
titulo.textContent = "COTL Nutrição";

//Este bloco determina a variavel peso do primeiro paciente//
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;


//Este bloco determina a variavel altura do primeiro paciente//
var paciente = document.querySelector("#primeiro-paciente");
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


//Este bloco determina a variavel IMC do primeiro paciente e muda seu conteúdo//
var IMC = peso / (altura * altura)

//valores booleanos
var pesoValido = true;
var alturaValida = true;

//alerta caso o peso e altura sejam invalidos
if(peso <= 0 || peso >= 1000){
    alert("Peso Inválido!");
    var pesoValido = false;
}

if(altura <= 0 || altura >= 3.00){
    alert("Altura Inválida!");
    var alturaValida = false;
}

if(pesoValido && alturaValida){
    var tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = IMC;
}












