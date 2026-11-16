const btnDato = document.getElementById("btnDato");
const textoFrase = document.getElementById("frase");

// Lista (array) con frases sobre Sofía
const datos = [
    "🏑 Me encanta jugar partidos de hockey los fines de semana.",
    "📚 Estudio en St Brendan's College y estoy aprendiendo desarrollo web.",
    "🚀 ¡Hacé clic en cualquiera de mis trabajos de abajo para probarlos!"
];

let indice = 0;

btnDato.addEventListener("click", function() {
    textoFrase.innerText = datos[indice];
    indice = indice + 1;

    // Si llega al final de la lista, vuelve a empezar desde el principio
    if (indice >= datos.length) {
        indice = 0;
    }
});
