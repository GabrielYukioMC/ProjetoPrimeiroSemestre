var mostra = document.getElementById('mostrar');
var mostrarConf = document.getElementById('mostarConf');
var senha = document.getElementById('senha_input');
var senhaConf = document.getElementById('ConfSenha_input');



mostra.addEventListener('click',()=>{
    if(mostra.classList.contains( 'fa-eye')){
        mostra.classList.remove('fa-eye')
        mostra.classList.add('fa-eye-slash')
        senha.setAttribute('type','text');
    }else{
        mostra.classList.remove('fa--eye-slash')
        mostra.classList.add('fa-eye')
        senha.setAttribute('type','password');
     
    }
})

mostrarConf.addEventListener('click',()=>{
    if(mostrarConf.classList.contains( 'fa-eye')){
        mostrarConf.classList.remove('fa-eye')
        mostrarConf.classList.add('fa-eye-slash')
        senhaConf.setAttribute('type','text');
    }else{
        mostrarConf.classList.remove('fa--eye-slash')
        mostrarConf.classList.add('fa-eye')
        senhaConf.setAttribute('type','password');
     
    }
})


