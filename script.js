

function enviarDatos() {
  // Obtener valores de los campos
  const precio = parseFloat(document.getElementById('precio').value);
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const tasaCrecimiento = parseFloat(document.getElementById('tasaCrecimiento').value);
  const costos = parseFloat(document.getElementById('costos').value);
  const gastos = parseFloat(document.getElementById('gastos').value);
  const impuestos = parseFloat(document.getElementById('impuestos').value);
  const ebitda = parseFloat(document.getElementById('ebitda').value);

  // Calcular ingresos (puedes realizar cálculos adicionales según tus necesidades)
  const ingresos = precio * cantidad;

  // Guardar resultados en localStorage para que estén disponibles en flujo.html
  localStorage.setItem('ingresos', ingresos);
  localStorage.setItem('costos', costos); // Puedes hacer lo mismo con otros valores

  // Redirigir a flujo.html
  window.location.href = `flujo.html?precio=${precio}&cantidad=${cantidad}&ingresos=${ingresos}&costos=${costos}`;
}

// Función para limpiar localStorage
function limpiarLocalStorage() {
  localStorage.removeItem('ingresos');
  localStorage.removeItem('costos'); // Limpia otros valores según sea necesario
}

// Agregamos esta función para mostrar los resultados en la tabla
function mostrarResultados() {
  // Obtener resultados desde localStorage
  const ingresos = localStorage.getItem('ingresos');
  const costos = localStorage.getItem('costos'); // Puedes hacer lo mismo con otros valores

  // Mostrar resultados en la tabla
  document.getElementById('ingresosResultado').innerText = ingresos;
  // También puedes hacer lo mismo para otros valores en la tabla
}

// Llamamos a la función al cargar la página
mostrarResultados();


// Agregamos esta función para limpiar localStorage al volver a ingresar datos
function volverAIngresarDatos() {
  limpiarLocalStorage();
}

// Asignamos la función al enlace o botón de volver a ingresar datos
const enlaceVolver = document.querySelector('a[href="index.html"]');
if (enlaceVolver) {
  enlaceVolver.addEventListener('click', volverAIngresarDatos);
}