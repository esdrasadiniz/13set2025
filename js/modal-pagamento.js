// Seleciona todos os botões de copiar
const botoes = document.querySelectorAll(".copiar-pix");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        // pega o código do atributo data-pix
        const codigoPix = botao.getAttribute("data-pix");

        function showFeedback(message) {
            const box = document.getElementById("feedback");
            const text = document.getElementById("feedback-text");
            if (text) text.textContent = message;
            if (box) {
                box.classList.remove("hidden");
                // Fecha sozinho após 3 segundos
                setTimeout(closeFeedback, 3000);
            }
        }

        function closeFeedback() {
            const box = document.getElementById("feedback");
            if (box) box.classList.add("hidden");
        }

        navigator.clipboard.writeText(codigoPix)
            .then(() => {
                showFeedback("Código Pix copiado!");
            })
            .catch(error => {
                alert("Erro ao copiar o Pix: " + error);
            });
    });
});
