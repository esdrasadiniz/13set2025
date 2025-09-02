// -----------------------------
// FEEDBACK DO FORMULÁRIO
// -----------------------------
function showFormFeedback(message) {
    const box = document.getElementById("feedback");
    const text = document.getElementById("feedback-text");

    if (text) text.textContent = message;
    if (box) {
        box.classList.remove("hidden");
        setTimeout(closeFormFeedback, 3000);
    }
}

function closeFormFeedback() {
    const box = document.getElementById("feedback");
    if (box) box.classList.add("hidden");

    const form = document.getElementById("main-form");
    if (form) form.classList.remove("active");
}

// Exemplo de uso no submit do formulário
const form = document.getElementById("main-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // aqui iria sua lógica de envio do form...
        showFormFeedback("Formulário enviado com sucesso!");
    });
}

// -----------------------------
// FEEDBACK DOS BOTÕES PIX
// -----------------------------
function showPixFeedback(message) {
    const box = document.getElementById("pix-feedback");
    const text = document.getElementById("pix-feedback-text");

    if (text) text.textContent = message;
    if (box) {
        box.classList.remove("hidden");
        setTimeout(() => box.classList.add("hidden"), 3000);
    }
}

// Seleciona todos os botões de copiar Pix
const botoesPix = document.querySelectorAll(".copiar-pix");

botoesPix.forEach(botao => {
    botao.addEventListener("click", () => {
        const codigoPix = botao.getAttribute("data-pix");

        navigator.clipboard.writeText(codigoPix)
            .then(() => {
                showPixFeedback("Código Pix copiado!");
            })
            .catch(error => {
                alert("Erro ao copiar o Pix: " + error);
            });
    });
});
