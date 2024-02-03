function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  
  const img = document.querySelector("#profile img");
  
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/photo-light.png');
    img.setAttribute('alt', 'Foto de Iarley com camisa laranja e fundo azul gradiente');
  } else {
    img.setAttribute('src', './assets/photo.png');
    img.setAttribute('alt', 'Foto de iarley com camisa laranja e fundo laranja');
  }
}