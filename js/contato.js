/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = document.querySelector("#cep");
const campoTelefone = document.querySelector("#telefone");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaoBuscar = document.querySelector("#buscar");
const mensagemStatus = document.querySelector("#status");

//Ouvinte de evento para o botão buscar
botaoBuscar.addEventListener('click', function(){
    //verificar se o cep digitado não tem 9 dígitos
    if(campoCep.value.length !== 9){
        mensagemStatus.innerHTML = 'Digite um cep válido!';
        mensagemStatus.style.color = 'purple';
        return;



    }
})