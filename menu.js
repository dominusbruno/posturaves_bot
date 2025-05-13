// Expande ou recolhe o submenu clicado
function abrirSubmenu(id) {
  const submenu = document.getElementById(`submenu-${id}`);
  submenu.classList.toggle('hidden');
}

// Simula abertura de página (você pode substituir por window.location.href ou Telegram.WebApp.sendData)
function abrirPagina(pagina) {
  Telegram.WebApp.showAlert(`Abrindo página: ${pagina}`);
}
