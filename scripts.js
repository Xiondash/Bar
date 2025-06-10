const form = document.getElementById('reservaForm');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formElement = e.target;
  const formData = new FormData(formElement);

  const url = 'https://script.google.com/macros/s/AKfycbw2jiIsgxN6VhWctNInTfRp-tc52_I6_tZno3BqFhghwFJeod4UDegHwhZg76C_NdJF6Q/exec';

  // Crea un formulario oculto que se envía como HTML (evita CORS)
  const tempForm = document.createElement('form');
  tempForm.action = url;
  tempForm.method = 'POST';
  tempForm.style.display = 'none';

  for (let [key, value] of formData.entries()) {
    const input = document.createElement('input');
    input.name = key;
    input.value = value;
    tempForm.appendChild(input);
  }

  document.body.appendChild(tempForm);
  tempForm.submit();

  respuesta.textContent = "¡Reserva enviada correctamente!";
  form.reset();
});
