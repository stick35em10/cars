// Defina a data do evento (ano, mês - 1, dia, hora, minuto, segundo)
const eventDate = new Date('2025-02-27T20:30:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Cálculos para dias, horas, minutos e segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Atualiza o HTML com os valores calculados
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

    // Se o evento já passou, exibe uma mensagem
    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "<div class='countdown-item'>O evento já começou!</div>";
    }
}

// Atualiza o cronômetro a cada segundo
const interval = setInterval(updateCountdown, 1000);

// Executa a função uma vez para evitar atraso inicial
updateCountdown();