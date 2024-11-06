// Selecionando a palavra menu
const botaomenu = document.querySelector('.titulo-menu a');

// Selecionando a lista de links do menu
const listadelinks = document.querySelector('.links-menu');

//Ouvinte de Evento para clicar no botao menu

botaomenu.addEventListener('click', function(event){
   
    //anulando o comportamento padrão do link
    event.preventDefault();
    console.log('opaaa');
   //Alternar a classe aberto entre ativado/desativado

    listadelinks.classList.toggle('aberto');

    if(listadelinks.classList.contains('aberto'))
    {
      botaomenu.innerHTML = 'Fechar &times;';
      
      
    }else{
        console.log("okkk");
        botaomenu.innerHTML = 'Menu &equiv;';
    }
});