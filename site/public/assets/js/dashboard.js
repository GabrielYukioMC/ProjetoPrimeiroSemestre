if (sessionStorage.CARGO_USUARIO != 'Admin') {
    window.location = "index.html";
}

nameUsuarioPrincipal.innerHTML = sessionStorage.NOME_USUARIO
cargoUsuarioPrincipal.innerHTML = sessionStorage.CARGO_USUARIO


var body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    modeSwtich = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwtich.addEventListener("click", () => {
    body.classList.toggle("dark");


    if (body.classList.contains("dark")) {
        modeText.innerHTML = "Light Mode"
    } else {
        modeText.innerHTML = "Dark Mode"

    }
});


var dashboardBtn = document.getElementById("dashboardBtn")
dashboardBtn.addEventListener('click', () => {
    dashboard.classList.remove('none')
    dashboardBtn.classList.add('active')

    notificacoes.classList.add('none')
    analytics.classList.add('none')
    notificacoesBtn.classList.remove('active')
    analyticsBtn.classList.remove('active')
})



var notificacoesBtn = document.getElementById("notificacoesBtn")
notificacoesBtn.addEventListener('click', () => {
    notificacoes.classList.remove('none')
    notificacoesBtn.classList.add('active')


    dashboard.classList.add('none')
    analytics.classList.add('none')
    dashboardBtn.classList.remove('active')
    analyticsBtn.classList.remove('active')
})

var analyticsBtn = document.getElementById("analyticsBtn")
analyticsBtn.addEventListener('click', () => {
    analytics.classList.remove('none')
    analyticsBtn.classList.add('active')



    dashboard.classList.add('none')
    notificacoes.classList.add('none')
    dashboardBtn.classList.remove('active')
    notificacoes.classList.remove('active')
})

var logout = document.getElementById('logout')
logout.addEventListener('click', () => {
    sessionStorage.clear();
    window.location = "index.html";
})