const formSection    = document.getElementById('form-section');
const displaySection = document.getElementById('display-section');
const form           = document.getElementById('upload-form');
const unlockBtn      = document.getElementById('unlock-btn');

const pwd = 'TuPassword123'; // 💡 cámbiala en producción

// Guardar en localStorage y mostrar
form.addEventListener('submit', e => {
  e.preventDefault();
  // Validación integrada por HTML (required) basta
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    // Metadatos
    const meta = {
      cliente:    document.getElementById('cliente').value,
      fecha:      document.getElementById('fecha').value,
      lugar:      document.getElementById('lugar').value,
      tipo:       document.getElementById('tipo').value,
      comentarios:document.getElementById('comentarios').value,
      contenido:  reader.result
    };
    localStorage.setItem('scriptData', JSON.stringify(meta));
    renderScript(meta);
  };
  reader.readAsText(file, 'UTF-8');
});

// Si ya hay datos en localStorage, los dibujo al cargar
window.addEventListener('load', () => {
  const saved = localStorage.getItem('scriptData');
  if (saved) renderScript(JSON.parse(saved));
});

function renderScript(data) {
  formSection.classList.add('hidden');
  displaySection.classList.remove('hidden');
  document.getElementById('hdr-cliente').textContent = data.cliente;
  document.getElementById('hdr-fecha').textContent   = data.fecha;
  document.getElementById('hdr-lugar').textContent   = data.lugar;
  document.getElementById('hdr-tipo').textContent    = data.tipo;
  document.getElementById('hdr-comentarios').textContent = data.comentarios;
  document.getElementById('script-content').textContent  = data.contenido;
}

// “Volver atrás” con contraseña
unlockBtn.addEventListener('click', () => {
  const attempt = prompt('Ingresa la contraseña para editar el guion:');
  if (attempt === pwd) {
    localStorage.removeItem('scriptData');
    location.reload();
  } else {
    alert('Contraseña incorrecta.');
  }
});
