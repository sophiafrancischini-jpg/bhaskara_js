function bhaskara(a, b, c, callbackDividir) {
    const x1 = b * (-1) + Math.sqrt(b ** 2 - 4 * a * c)
    const total = callbackDividir(x1, (2 * a))
    return total
}

function dividir(a, b) {
    return a / b
}

bhaskara(-1, 6, 7, dividir)

function bhaskara(a, b, c, callbackDividir) {
    const x1 = (-1) * b + Math.sqrt(b ** 2 - 4 * a * c);
    const solucao1 = callbackDividir(x1, 2 * a);
    const x2 = (-1) * b - Math.sqrt(b ** 2 - 4 * a * c);
    const solucao2 = callbackDividir(x2, 2 * a);
return `x₁ = ${solucao1} \n x₂ = ${solucao2}`;
}
function dividir(a, b) {
    return a / b;
}
console.log(bhaskara(-1, 6, 7, dividir));