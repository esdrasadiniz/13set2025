// -----------------------------
// FEEDBACK DO PIX
// -----------------------------
function showPixFeedback(message) {
    const box = document.getElementById("feedback");
    const text = document.getElementById("feedback-text");

    if (text) text.textContent = message;
    if (box) {
        box.classList.remove("hidden");

        // Fecha automaticamente após 3 segundos
        setTimeout(() => {
            box.classList.add("hidden");
        }, 3000);
    }
}

// -----------------------------
// BOTÕES PIX
// -----------------------------
const botoesPix = document.querySelectorAll(".copiar-pix");

botoesPix.forEach(botao => {
    botao.addEventListener("click", () => {
        const codigoPix = botao.getAttribute("data-pix");

        navigator.clipboard.writeText(codigoPix)
            .then(() => {
                showPixFeedback("Código Pix copiado!");
            })
            .catch(error => {
                showPixFeedback("Erro ao copiar o Pix!");
                console.error(error);
            });
    });
});
