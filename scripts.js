const form = document.getElementById('reservaForm');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = encodeURIComponent(form.nombre.value);
  const correo = encodeURIComponent(form.correo.value);
  const telefono = encodeURIComponent(form.telefono.value);
  const fecha = encodeURIComponent(form.fecha.value);
  const comentarios = encodeURIComponent(form.comentarios.value);

  const url = `https://script.google.com/macros/s/AKfycbw2jiIsgxN6VhWctNInTfRp-tc52_I6_tZno3BqFhghwFJeod4UDegHwhZg76C_NdJF6Q/exec?nombre=${nombre}&correo=${correo}&telefono=${telefono}&fecha=${fecha}&comentarios=${comentarios}`;

  try {
    const res = await fetch(url);
    const result = await res.json();

    if (result.status === 'ok') {
      respuesta.textContent = "¡Reserva enviada correctamente!";
      form.reset();
    } else {
      respuesta.textContent = "Error al enviar la reserva.";
    }
  } catch (error) {
    console.error(error);
    respuesta.textContent = "Error de conexión.";
  }
});
