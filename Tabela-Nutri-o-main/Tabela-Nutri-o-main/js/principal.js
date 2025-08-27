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
var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = IMC;

















