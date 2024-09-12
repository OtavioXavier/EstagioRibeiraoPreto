function pertenceFibonacci(numero) {
	let a = 0;
	let b = 1;

	while (b < numero) {
		let c = a + b;
		a = b;
		b = c;
	}

	return b === numero;
}

const numeroInformado = 22;

if (pertenceFibonacci(numeroInformado)) {
	console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
	console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}