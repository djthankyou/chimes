document.addEventListener('DOMContentLoaded', () => {
    const chimeBox = document.getElementById('chimeBox');
    const chimeSounds = ['chime1.mp3', 'chime2.mp3', 'chime3.mp3', 'chime4.mp3'];
    const chimeCount = 5; // Including an anomaly

    // Create chimes
    for (let i = 0; i < chimeCount; i++) {
        const chime = document.createElement('div');
        chime.classList.add('chime');
        chime.style.left = `${i * 20}%`; // Spread chimes
        chimeBox.appendChild(chime);

        // Animate and play sound at random intervals
        setInterval(() => {
            animateChime(chime, chimeSounds[i % chimeSounds.length]);
        }, Math.random() * 2000 + 1000);
    }

    // Rain animation
    createRain();
});

function animateChime(chime, soundFile) {
    const moveDistance = Math.random() * 30 - 15; // Random distance between -15px and 15px
    chime.style.transform = `translateX(${moveDistance}px)`;

    // Play sound
    setTimeout(() => { // Delay to simulate "touch"
        const audio = new Audio(soundFile);
        audio.play();
    }, 500);
}

function createRain() {
    const rainContainer = document.getElementById('rain');

    setInterval(() => {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // Between 0.5s and 1s
        rainContainer.appendChild(raindrop);

        // Remove after animation to prevent DOM overflow
        setTimeout(() => {
            rainContainer.removeChild(raindrop);
        }, 1000);
    }, 100);
}
