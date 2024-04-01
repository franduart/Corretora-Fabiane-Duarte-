function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
       menuMobile.classList.remove('open');
    }else {
        menuMobile.classList.add('open');
    }
}

function logar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    let cadastrarImoveis = document.getElementById('cadastrar-imoveis');
   

    if (login == "fabi56"  && login != ""  && senha == "123"){
        location.href = "cadastrar-imoveis.html"
        }else{
        
        alert('senha incorreta')
        location.href = "validacao-conta.html"
    }
}

