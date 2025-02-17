// Defina a data do evento (ano, mês - 1, dia, hora, minuto, segundo)
const eventDate = new Date('2025-02-31T23:59:59').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Cálculos para dias, horas, minutos e segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Atualiza o HTML com os valores calculados
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Se o evento já passou, exibe uma mensagem
    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "O evento já começou!";
    }
}

// Atualiza o cronômetro a cada segundo
const interval = setInterval(updateCountdown, 1000);

// Executa a função uma vez para evitar atraso inicial
updateCountdown();