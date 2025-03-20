document.addEventListener("DOMContentLoaded", function () {
    const usuarioId = localStorage.getItem("usuarioId");

    if (!usuarioId || usuarioId !== "ID_do_novo_usuario") {
        localStorage.setItem("usuarioId", "ID_do_novo_usuario");
        localStorage.removeItem("tempoRestanteQuiz");
        localStorage.setItem("pontos", 0);
    }

    let tempoRestante = parseInt(localStorage.getItem("tempoRestanteQuiz"), 10);

    if (isNaN(tempoRestante) || tempoRestante > 120 || tempoRestante <= 0) {
        tempoRestante = 120;
        localStorage.setItem("tempoRestanteQuiz", tempoRestante);
    }

    const countdownElement = document.getElementById("countdown");

    function atualizarTimer() {
        if (tempoRestante > 0) {
            tempoRestante--;
            localStorage.setItem("tempoRestanteQuiz", tempoRestante);
        }

        let minutos = Math.floor(tempoRestante / 60);
        let segundos = tempoRestante % 60;
        countdownElement.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

        if (tempoRestante <= 0) {
            clearInterval(timer);
            localStorage.removeItem("tempoRestanteQuiz");
            window.location.href = "ranking.html";
        }
    }

    atualizarTimer();
    const timer = setInterval(atualizarTimer, 1000);
    
});
