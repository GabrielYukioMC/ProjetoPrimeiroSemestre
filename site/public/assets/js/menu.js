


console.log(sessionStorage.ID_USUARIO)
var link1 = 'usuario.html'
var link2 = 'dashboard.html'
if ( sessionStorage.ID_USUARIO >0) {
    if ( sessionStorage.CARGO_USUARIO == 'Admin') {
        loginUsuario.innerHTML = ` <a href="${link2}"><i class="fa-solid fa-user"></i></a>`
    }else{
        loginUsuario.innerHTML = ` <a href="${link1}"><i class="fa-solid fa-user"></i></a>`

    }
} else {
    loginUsuario.innerHTML = ` <a href="login.html"><i class="fa-solid fa-user"></i></a>`
}


