

const linkPerfil = document.getElementById("link-perfil")
const navPerfil = document.getElementById("nav-perfil")
const linkDados = document.getElementById("link-perfil-dados")
const VoltaIncio = document.getElementById("VoltaIncio")

window.addEventListener("keyup", (event)=> {  
  
  if(event.key === "1") {
    if (navPerfil.style.display == "block") {
      linkDados.click()
    } else {
      navPerfil.style.display = "block"
    }
  }
  
  if(event.code === "Escape") {
    navPerfil.style.display = "none"
  }

  if(event.code === "Backspace") {
    VoltaIncio.click()
  }
  
})

/*keydown: Dispara quando qualquer tecla é pressionada.
keyup: Dispara quando qualquer tecla é solta.
key:chave O valor real da tecla pressionada..
code:Valor do código da Chave Física..*/

/*linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})*/