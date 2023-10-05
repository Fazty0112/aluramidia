function TocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

  const listadeTeclas = document.querySelectorAll('.tecla');

let contador = 0

  //enquanto
  while (contador < listadeTeclas.length) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = 'som_{instrumento}'
    console.log(idAudio);

    tecla.onclick = function () {
        TocaSom('#som_tecla_pom')
    }

    contador = contador + 1;

    console.log(contador);
  }