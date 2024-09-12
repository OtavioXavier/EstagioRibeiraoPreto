function contarLetrasA(texto) {

    const textoMinusculo = texto.toLowerCase();

    let contador = 0;
  

    for (let i = 0; i < textoMinusculo.length; i++) {
      if (textoMinusculo[i] === 'a') {
        contador++;
      }
    }
  

    if (contador > 0) {
      console.log(`A letra 'a' aparece ${contador} vezes no texto.`);
    } else {
      console.log("A letra 'a' não foi encontrada no texto.");
    }
  }
  


  contarLetrasA("Amanda");
  contarLetrasA("Cibele");