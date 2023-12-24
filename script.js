document.addEventListener("DOMContentLoaded", function() {
    const ornaments = document.querySelectorAll(".ornament");
    const message = document.getElementById("message");

    ornaments.forEach(ornament => {
        ornament.addEventListener("mouseover", function() {
            const ornamentId = ornament.id;
            const ornamentPosition = ornament.getBoundingClientRect();
            const messageText = getMessageText(ornamentId);

            // Ajuste o caminho da imagem conforme necessário
            const imagePath = `./hellokitty/${ornamentId}.png`;
            
            message.innerHTML = `<img src="${imagePath}" alt="${ornamentId}"/> <p>${messageText}</p>`;
            message.style.top = `${ornamentPosition.top - 50}px`;
            message.style.left = `${ornamentPosition.left + ornamentPosition.width}px`;
            message.style.display = "block";
        });

        ornament.addEventListener("mouseout", function() {
            message.style.display = "none";
        });
    });

    function getMessageText(ornamentId) {
        // Adicione mensagens conforme necessário para cada ornamento
        switch (ornamentId) {
            case "ornament1":
                return "Mensagem para o Ornamento 1";
            case "ornament2":
                return "Mensagem para o Ornamento 2";
            case "ornament3":
                return "Mensagem para o Ornamento 3";
            // Adicione mais casos conforme necessário
            default:
                return "";
        }
    }
});
