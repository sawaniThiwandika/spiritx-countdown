const date = new Date("2025-05-19T00:00:00");

function updateCountdown() {
    const now = new Date();
    const gap = date - now;


    if (gap<= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hrs").textContent = "00";
        document.getElementById("min").textContent = "00";
        document.getElementById("sec").textContent = "00";
        clearInterval(countdownInterval);
        return;
    }
    else{
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((gap / 1000 / 60) % 60);
        const seconds = Math.floor((gap / 1000) % 60);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hrs").textContent = String(hours).padStart(2, '0');
        document.getElementById("min").textContent = String(minutes).padStart(2, '0');
        document.getElementById("sec").textContent = String(seconds).padStart(2, '0');
    }


}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
