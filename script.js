document.addEventListener('DOMContentLoaded', () => {
    const chimeBox = document.getElementById('chimeBox');
    const colors = ['#FF6347', '#FFD700', '#ADFF2F', '#40E0D0', '#6495ED']; // Different colors for each chime
    const chimeSounds = ['chime1.mp3', 'chime2.mp3', 'chime3.mp3', 'chime4.mp3', 'anomaly.mp3'];
    const chimeCount = 5;

    for (let i = 0; i < chimeCount; i++) {
        const chime = document.createElement('div');
        chime.classList.add('chime');
        chime.style.backgroundColor = colors[i];
        chimeBox.appendChild(chime);
        animateChime(chime, chimeSounds[i]);
    }

    generateRain();
});

function animateChime(chime, soundFile) {
    setInterval(() => {
        // Random sway animation
        chime.style.transform = `translateX(${Math.random() * 20 - 10}px)`;
        // Play sound
        const audio = new Audio(soundFile);
        audio.play();
    }, Math.random() * 4000 + 2000); // Random time between 2 to 6 seconds
}

function generateRain() {
    const rainContainer = document.getElementById('rain');

    setInterval(() => {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * window.innerWidth}px`;
        raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // Between 0.5s and 1s
        rainContainer.appendChild(raindrop);

        setTimeout(() => {
            rainContainer.removeChild(raindrop);
        }, 100
