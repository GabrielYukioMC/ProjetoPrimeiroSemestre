console.log(sessionStorage.ID_USUARIO)

if ( sessionStorage.ID_USUARIO >0) {
    loginUsuario.innerHTML = ` <a href="usuario.html"><i class="fa-solid fa-user"></i></a>`
} else {
    loginUsuario.innerHTML = ` <a href="login.html"><i class="fa-solid fa-user"></i></a>`
}


