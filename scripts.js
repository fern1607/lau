const flower = document.getElementById('flower');

flower.addEventListener('animationend', () => {
    flower.style.backgroundColor = '#FFC0CB'; // Color de la flor madura
});

// Ajustar el volumen de la música
const audio = document.querySelector('audio');
audio.volume = 0.3; // Ajusta el volumen (0.0 a 1.0)