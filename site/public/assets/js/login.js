var loginSenha = document.getElementById('login_senha_input');
var mostraL = document.getElementById('mostrarL');

mostraL.addEventListener('click',()=>{
    if(mostraL.classList.contains( 'fa-eye')){

        mostraL.classList.remove('fa-eye')
        mostraL.classList.add('fa-eye-slash')
        login_senha_input.setAttribute('type','text');

    }
    else{
        mostraL.classList.remove('fa--eye-slash')
        mostraL.classList.add('fa-eye')
        login_senha_input.setAttribute('type','password');
     
    }
})