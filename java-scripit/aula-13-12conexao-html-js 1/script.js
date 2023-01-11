const comentario= document.getElementById('comente')
const rede_social= document.getElementsByClassName('lista_redes')
console.log(rede_social)
console.log(comentario)
comentario.innerText='Comentarios  Dos Alunos '

rede_social[0].innerText='SIGAM NOSSAS REDES SOCIAIS ' /* altera texto por class */



/*FUNCTION nesta função pode colocar qualquer array ele ira mostar*/ 

function imprimir(listaElementos){
    for(let i= 0;i <listaElementos.length; i++){
        console.log(listaElementos[i])
    }
}

imprimir(rede_social)




