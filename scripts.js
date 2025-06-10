const form = document.getElementById('reservaForm');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch('https://script.google.com/macros/s/AKfycbw2jiIsgxN6VhWctNInTfRp-tc52_I6_tZno3BqFhghwFJeod4UDegHwhZg76C_NdJF6Q/exec', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
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
