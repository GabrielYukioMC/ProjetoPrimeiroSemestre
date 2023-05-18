function AbrirModalComentario() {
    var modal = document.getElementById('modalConteudo')
    modal.classList.remove('none')
}
var fechar = document.getElementById('fechar')
fechar.addEventListener('click', () => {
    modalConteudo.classList.add('none')
})

var textArea = document.getElementById('textoComentarioCriacao')
textArea.addEventListener('input', () => {
    var qtdCaracter = textArea.value.length;
    numCaracter.innerHTML = `${qtdCaracter}/1500`
})

var modeloComentario = 'comentario'
 tipoTema.innerHTML = `Tema: ${modeloComentario}`


var SpanComentario = document.getElementById('SpanComentario');
SpanComentario.addEventListener('click', () => {
    modeloComentario = 'comentario'
     tipoTema.innerHTML = `Tema: ${modeloComentario}`

})

var SpanTeoria = document.getElementById('SpanTeoria');
SpanTeoria.addEventListener('click', () => {
    modeloComentario = 'teoria'
     tipoTema.innerHTML = `Tema: ${modeloComentario}`

})

var SpanSpoiler = document.getElementById('SpanSpoiler');
SpanSpoiler.addEventListener('click', () => {
    modeloComentario = 'spoiler' 
    tipoTema.innerHTML = `Tema: ${modeloComentario}`

})
