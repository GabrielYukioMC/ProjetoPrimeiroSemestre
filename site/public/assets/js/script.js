console.log(sessionStorage.ID_USUARIO)

if ( sessionStorage.ID_USUARIO >0) {
    loginUsuario.innerHTML = ` <a href="usuario.html"><i class="fa-solid fa-user"></i></a>`
} else {
    loginUsuario.innerHTML = ` <a href="login.html"><i class="fa-solid fa-user"></i></a>`
}




const ctx = document.getElementById('myChart');
Chart.defaults.color = '#2211a0';
// Chart.defaults.color = '#a01111';

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Manga', 'Anime', 'Ambos'],
        datasets: [{
            data: [50, 10, 40],
            // borderWidth: 5,
            backgroundColor: [

                '#6954f4',
                '#161045',
                '#2211a0',

                // '#f45454',
                // '#451010',
                // '#a01111',
            ],

            // borderColor: '#000',


        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 17,
                        weight: "bolder"
                    },


                }
            }
        }
    }

});