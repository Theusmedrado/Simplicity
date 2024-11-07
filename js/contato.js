/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = document.querySelector("#cep");
const campoTelefone = document.querySelector("#Telefone");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaoBuscar = document.querySelector("#buscar");
const mensagemStatus = document.querySelector("#status");

//Ativação das máscaras para telefone e Cep
$(campoCep).mask('00000-000');
$(campoTelefone).mask('(00) 00000-0000');


//Ouvinte de evento para o botão buscar
botaoBuscar.addEventListener('click', async function () {
    //verificar se o cep digitado não tem 9 dígitos
    if (campoCep.value.length !== 9) {
        mensagemStatus.innerHTML = 'Digite um cep válido!';
        mensagemStatus.style.color = 'purple';

        // para completamente a execução do código
        return;
    }
    // guardar o valor do cep digitado
    let cepDigitado = campoCep.value;
    console.log(cepDigitado);
    /*
    AJAX- Asyncronous JavaScript And XML
    técnica de comunicação assíncrona (transmissão, recebimento)
    de dados MUITO USADA entre diferentes tipos de sistemas (site, app, jogo, software) e tecnologias (php, java, asp, etc).
    */

    // etapa 1: preparamos o endereço junto com o cep digitado
    let endereco = `https://viacep.com.br/ws/${cepDigitado}/json/`;

    // etapa 2: acesamos o viaCEP com o endereço ajustado 
    const resposta = await fetch(endereco);

    //etapa 3: extrair os dados que o via CEP processou
    const dados = await resposta.json();// formato de OBJETO
    console.log(dados);

    //etapa 4: lidando com os dados (em caso de erro ou sucesso)
    if ("erro" in dados) {
        mensagemStatus.innerHTML = 'CEP inexistente!🙁';
        mensagemStatus.style.color = 'red';
    } else {
        mensagemStatus.innerHTML = 'CEP encontrado!😎';
        mensagemStatus.style.color = 'blue';


        //selecionando os campos que estão escondidos
        const campos = document.querySelectorAll(".campos-restantes");

        // loop for para acessar cada campo e remover a classe
        for (let i = 0; i < campos.length; i++) {
            campos[i].classList.remove('campos-restantes');

            campoEndereco.value = dados.logradouro;
            campoBairro.value = dados.bairro;
            campoCidade.value = dados.localidade;
            campoEstado.value = dados.uf;
        }
    }
});
// final da função do botão busca









