let btnBuscar = document.querySelector('#btnBuscar');
let totalMoneda = document.querySelector('#resultadoModenada')

btnBuscar.addEventListener('click', () => {
    let montoUsuario = document.querySelector('#inputUsuario').value;
    let moneda = document.querySelector('#selectorMoneda').value;
    if (montoUsuario !== ''){
        getMonedas(montoUsuario, moneda)
    } else {
        alert('Ingresa un monto')
    }
})

async function getMonedas(montoUsuario, moneda){
    const res = await fetch("https://mindicador.cl/api/");
    const data = await res.json();
    switch (moneda){
        case 'dolar':
            totalMoneda.innerHTML = `$ ${(montoUsuario / parseFloat(data.dolar.valor)).toFixed(2)} ${data.dolar.codigo}`;
        break;
        case 'euro':
            totalMoneda.innerHTML = `$ ${(montoUsuario / parseFloat(data.euro.valor)).toFixed(2)} ${data.euro.nombre}`;
        break;
        case 'bitcoin':
            totalMoneda.innerHTML = `$ ${(montoUsuario / parseFloat(data.bitcoin.valor)).toFixed(2)} ${data.bitcoin.nombre}`;
        break;
    }
}

// async function getChart(){
//     const res = await fetch("https://mindicador.cl/api/");
//     const datos = await res.json();

//     const labels = datos.map((dato) => {
//         return dato.fecha;
//     });

//     const data = datos.map((dato) => {
//         const monto = dato.valor;
//     })
//     const datasets =[
//         {
//             label : 'Monto',
//             borderColor: 'rgb(255, 99, 132)',
//             data
//         }
//     ];
//     return {labels, datasets}
// }

// async function renderGrafica(){
//     const data = await getChart();
//     const config = {
//         type: 'line',
//         data
//     };
//     const myChart = document.querySelector('#myChart');
//     myChart.style.backgroundColor = #f3f3f3;
//     new CharacterData(myChart, config);
// }

// renderGrafica()

