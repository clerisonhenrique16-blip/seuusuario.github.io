// Espera o site carregar
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso!");

    // Animação simples de entrada
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    // Botão do Discord
    const discordButton = document.querySelector("a button");

    if (discordButton) {
        discordButton.addEventListener("click", () => {
            alert("Você será redirecionado para nosso servidor do Discord!");
        });
    }
});