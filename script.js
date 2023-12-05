function enviarDatos() {
  // Obtener valores de los campos
  const precio = document.getElementById('precio').value;
  function enviarDatos() {
  // Obtener valores de los campos
  const precio = document.getElementById('precio').value;
  const cantidad = document.getElementById('cantidad').value;
  const tasaCrecimiento = document.getElementById('tasaCrecimiento').value;
  const ingresos = document.getElementById('ingresos').value;
  const costos = document.getElementById('costos').value;
  const gastos = document.getElementById('gastos').value;
  const margen = document.getElementById('margen').value;
  const impuestos = document.getElementById('impuestos').value;
  const ebitda = document.getElementById('ebitda').value;

  // Puedes realizar acciones con los datos, como enviarlos a un servidor
  // Por ahora, solo los mostraremos en la consola
    
}
  // Obtener otros valores de campos...

  // Puedes realizar acciones con los datos, como enviarlos a un servidor
  // Por ahora, solo los mostraremos en la consola
  console.log('Precio:', precio);
  console.log('Precio:', precio);
  console.log('Cantidad:', cantidad);
  console.log('Tasa de Crecimiento:', tasaCrecimiento);
  console.log('Ingresos:', ingresos);
  console.log('Costos:', costos);
  console.log('Gastos:', gastos);
  console.log('Margen:', margen);
  console.log('Impuestos:', impuestos);
  console.log('EBITDA:', ebitda);
  // Mostrar otros valores en la consola...
  // Agregar fila a la tabla de resultados
  agregarFilaResultado('Precio', precio);
}

function agregarFilaResultado(dato, valor) {
  const table = document.getElementById('resultadosTable');
  const row = table.insertRow(-1);
  const cellDato = row.insertCell(0);
  const cellValor = row.insertCell(1);
  cellDato.innerHTML = dato;
  cellValor.innerHTML = valor;
}