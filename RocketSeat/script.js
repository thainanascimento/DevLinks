function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/imagem 2.jpeg")
  } else {
    img.setAttribute("src", "./assets/imagem 1.jpeg")
  }
}
