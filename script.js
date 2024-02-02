function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  
  const img = document.querySelector("#profile img");
  
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de Mayk sorrindo, usando óculos escuro, jaqueta jeans e fundo azul');
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto de Mayk com óculos, camisa preta e fundo laranja');
  }
}