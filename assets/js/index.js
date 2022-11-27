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
            totalMoneda.innerHTML = `$ ${(montoUsuario / parseFloat(data.dolar.valor)).toFixed(2)} ${data.dolar.codigo}es`;
        break;
        case 'euro':
            totalMoneda.innerHTML = `$ ${(montoUsuario / parseFloat(data.euro.valor)).toFixed(2)} ${data.euro.nombre}s`;
        break;
        case 'bitcoin':
            totalMoneda.innerHTML = `$ ${(montoUsuario / parseFloat(data.bitcoin.valor)).toFixed(2)} ${data.bitcoin.nombre}s`;
        break;
    }

}
// Grafica

let dias = data.serie.map((e) => e.fecha.slice(8, 10));
console.log(dias);

let valores = data.serie.map((e) => e.valor);
console.log(valores);

var speedCanvas = document.getElementById("myChart");


let speedData = {
  labels: dias.slice(0, 10).reverse(),
  datasets: [
    {
      data: valores.slice(0, 10).reverse(),
      label: "Noviembre",
      pointBackgroundColor: "rgb(75, 192, 192)",
      fill: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)"
    }
  ]
};


let lineChart = new Chart(speedCanvas, {
  type: "line",
  data: speedData
});


