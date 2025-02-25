document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        "No Doeit, cada doação é um ato de amor que pode transformar vidas.",
        "Sua doação faz a diferença para milhares de pessoas!",
        "A solidariedade é o primeiro passo para um mundo melhor.",
    ];

    let index = 0;
    const elemento = document.getElementById("carousel-text");
    const indicadoresContainer = document.querySelector(".carousel-indicators");

    // Cria os indicadores (bolinhas)
    frases.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active"); // A primeira já fica ativa
        dot.addEventListener("click", () => mudarFrase(i)); // Clica e troca a frase
        indicadoresContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function mudarFrase(novoIndex) {
        index = novoIndex;
        elemento.innerHTML = `“${frases[index]}”`;

        // Atualiza os indicadores
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function autoTroca() {
        index = (index + 1) % frases.length;
        mudarFrase(index);
    }

    setInterval(autoTroca, 4000);
});
