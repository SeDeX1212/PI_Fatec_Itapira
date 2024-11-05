// Função para alterar o status manualmente
function alterarStatus(step) {
    const statusItems = document.querySelectorAll(".status-item");
    statusItems.forEach(item => item.classList.remove("active", "completed", "error"));

    if (step === 1) {
        document.getElementById("status1").classList.add("active");
    } else if (step === 2) {
        document.getElementById("status1").classList.add("completed");
        document.getElementById("status2").classList.add("active");
    } else if (step === 3) {
        document.getElementById("status2").classList.add("completed");
        document.getElementById("status3").classList.add("active");
    } else if (step === 4) {
        document.getElementById("status3").classList.add("completed");
        document.getElementById("status4").classList.add("completed");
    } else if (step === 5) {
        document.getElementById("status3").classList.add("completed");
        document.getElementById("status5").classList.add("error");
    }
}

// Adicionar lógica para atualizar status na página de envio de formulário
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional

    // Simula o envio do formulário e altera os status
    alterarStatus(1);  // Aguardando Envio

    setTimeout(() => {
        alterarStatus(2);  // Em Roteiro
    }, 1000);

    setTimeout(() => {
        alterarStatus(3);  // Em Trânsito
    }, 2000);

    setTimeout(() => {
        // Status final aleatório
        let aprovado = Math.random() > 0.5;
        if (aprovado) {
            alterarStatus(4);  // Aprovado/Entregue
        } else {
            alterarStatus(5);  // Rejeitado
        }
    }, 3000);
});
