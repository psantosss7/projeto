function toggleMode() {
    const hmtl = document.documentElement
    hmtl.classList.toggle("light")
  //  if(hmtl.classList.contains('light')) {
  //      hmtl.classList.remove('light')
  //  } else {
  //      hmtl.classList.add('light')
  //  }
  /* jeito mais fácil */
   

   //pegar a tag img
   const img = document.querySelector("#profile img")

   //substituir a imagem
   if(hmtl.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
 } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
 }
}