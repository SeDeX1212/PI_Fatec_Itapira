
// Função para verificar se a parte anterior foi preenchida corretamente
function checkPartCompleted(partId) {
    const fields = document.querySelectorAll(`#${partId} input, #${partId} select, #${partId} textarea`);
    for (const field of fields) {
        if (!field.value) {
            return false; // Caso algum campo não esteja preenchido
        }
    }
    return true; // Todos os campos estão preenchidos
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
    const totalParts = 3;
    let completedParts = 0;
    for (let i = 1; i <= totalParts; i++) {
        if (checkPartCompleted(`part-${i}`)) {
            completedParts++;
        }
    }
    const progress = (completedParts / totalParts) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

// Função de navegação entre as partes
document.querySelector("#next-1").addEventListener("click", function () {
    if (checkPartCompleted("part-1")) {
        document.getElementById("part-1").style.display = "none";
        document.getElementById("part-2").style.display = "block";
        updateProgressBar();
    } else {
        alert("Por favor, preencha todos os campos da Parte 1.");
    }
});

document.querySelector("#next-2").addEventListener("click", function () {
    if (checkPartCompleted("part-2")) {
        document.getElementById("part-2").style.display = "none";
        document.getElementById("part-3").style.display = "block";
        updateProgressBar();
    } else {
        alert("Por favor, preencha todos os campos da Parte 2.");
    }
});

document.querySelector("#prev-1").addEventListener("click", function () {
    document.getElementById("part-2").style.display = "none";
    document.getElementById("part-1").style.display = "block";
});

document.querySelector("#prev-2").addEventListener("click", function () {
    document.getElementById("part-3").style.display = "none";
    document.getElementById("part-2").style.display = "block";
});

// Validação geral ao submeter o formulário
function validateForm() {
    if (!checkPartCompleted("part-1") || !checkPartCompleted("part-2") || !checkPartCompleted("part-3")) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return false;
    }
    return true;
}

function validateForm() {
    if (!checkPartCompleted("part-1") || !checkPartCompleted("part-2") || !checkPartCompleted("part-3")) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return false;
    }

    // Coletando os dados do formulário
    const formData = {
        professor: document.querySelector("#professor").value,
        email: document.querySelector("#email").value,
        rg: document.querySelector("#rg").value,
        matricula: document.querySelector("#matricula").value,
        horaAula: document.querySelector("#hora-aula").value,
        outrasFatecs: document.querySelector("#outras-fatecs").value,
        tipoHAE: document.querySelector("#tipo-hae").value,
        metas: document.querySelector("#metas").value,
        objetivos: document.querySelector("#objetivos").value,
        justificativas: document.querySelector("#justificativas").value,
        recursos: document.querySelector("#recursos").value,
        resultado: document.querySelector("#resultado").value,
        metodologia: document.querySelector("#metodologia").value
    };

    // Armazenar os dados no localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirecionar para a página de enviado.html
    window.location.href = "enviado.html";

    return false; // Impede o envio tradicional do formulário
}
function gerarPDF() {
    const professor = document.getElementById("professor").value;
    const email = document.getElementById("email").value;
    const rg = document.getElementById("rg").value;
    const matricula = document.getElementById("matricula").value;
    const horaAula = document.getElementById("hora-aula").value;
    const outrasFatecs = document.getElementById("outras-fatecs").value;
    const tipoHAE = document.getElementById("tipo-hae").value;
    const metas = document.getElementById("metas").value;
    const objetivos = document.getElementById("objetivos").value;
    const justificativas = document.getElementById("justificativas").value;
    const recursos = document.getElementById("recursos").value;
    const resultado = document.getElementById("resultado").value;
    const metodologia = document.getElementById("metodologia").value;

    const doc = new jsPDF();

    // Adicionando título e dados do formulário no PDF
    doc.setFontSize(18);
    doc.text("Formulário HAE", 20, 20);

    doc.setFontSize(12);
    doc.text("Professor(a): " + professor, 20, 30);
    doc.text("E-mail: " + email, 20, 40);
    doc.text("RG: " + rg, 20, 50);
    doc.text("Matrícula: " + matricula, 20, 60);
    doc.text("Hora-aula semanal: " + horaAula, 20, 70);
    doc.text("Aula em outras Fatecs: " + outrasFatecs, 20, 80);
    doc.text("Tipo de HAE: " + tipoHAE, 20, 90);

    // Adicionando mais seções
    doc.text("Metas do Projeto: " + metas, 20, 110);
    doc.text("Objetivos do Projeto: " + objetivos, 20, 120);
    doc.text("Justificativas: " + justificativas, 20, 130);
    doc.text("Recursos: " + recursos, 20, 140);
    doc.text("Resultado Esperado: " + resultado, 20, 150);
    doc.text("Metodologia: " + metodologia, 20, 160);
    
    // Salvar o PDF
    doc.save("formulario_hae.pdf");
}