const ctx = document.getElementById('myChart');
window.addEventListener('resize', () => {
    window.location.reload()
})
async function obtenerDatos() {
    let datos = await fetch("data.json").then((res) => res.json().then((data) => data));
    let labels = datos.map((element) => element.day)
    let amounts = datos.map((element) => element.amount)
    new Chart(ctx, {
        type: 'bar',
        data: {
            label: 'xd',
            labels: labels,
            datasets: [{
            data: amounts,
            backgroundColor: 'hsl(10, 79%, 65%)',
            }]
        },
        options: {
            responsive: true,
            scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                grid: {
                    drawBorder: false,
                }
            }
            },
            plugins: {
                legend: {
                   display: false
                }
             }
        }
        });
}
obtenerDatos()