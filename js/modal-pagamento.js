 // Seleciona todos os botões de copiar
    const botoes = document.querySelectorAll(".copiar-pix");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            // pega o código do atributo data-pix
            const codigoPix = botao.getAttribute("data-pix");

           // navigator.clipboard.writeText(codigoPix)
           //     .then(() => {
                    // aqui você pode mostrar uma mensagem personalizada
           //         alert("Código PIX copiado!");
           //     })
           //     .catch(err => {
           //         console.error("Erro ao copiar PIX: ", err);
           //    });
        });
    });