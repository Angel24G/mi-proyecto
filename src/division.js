// Función de división
function division(a, b, c) {
    if (b === 0 || c === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b / c;
}