function toggleMode() {
  const html = document.documentElement
  //A função toogle ja faz isso sozinha
  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto da logo da Presentes Criativos, com cores rosa, azul e branco, e uma caixa de presente em cima com uma lâmpada."
    )
  } else {
    //Se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto da logo da Presentes Criativos, com cores rosa, azul e branco, e uma caixa de presente em cima com uma lâmpada."
    )
  }
}
