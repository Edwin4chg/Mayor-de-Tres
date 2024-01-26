function calcularMayor() {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);

    var resultadoDiv = document.getElementById("resultado");
    var mensajeP = document.getElementById("mensaje");

    // Calcular el mayor de los tres números
    var mayor = Math.max(numero1, numero2, numero3);

    // Mostrar el resultado
    mensajeP.textContent = "El mayor de los tres números es: " + mayor;
    resultadoDiv.style.display = "block";
}