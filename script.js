document.addEventListener('DOMContentLoaded', () => {
    const windSound = document.getElementById('windSound');
    windSound.play(); // Start the wind sound loop

    const chimeBox = document.getElementById('chimeBox');
    const chimeSounds = ['chime1.mp3', 'chime2.mp3', 'chime3.mp3', 'chime4.mp3'];
    const anomalySound = 'anomaly.mp3'; // Anomaly chime sound
    const chimeCount = 5; // Total number of chimes including anomaly

    // Create chimes
    for (let i = 0; i < chimeCount; i++) {
        const chime = document.createElement('div');
        chime.classList.add('chime');
        chimeBox.appendChild(chime);
        
        // Assign sound, with the last chime being the anomaly
        let soundFile = i === chimeCount - 1 ? anomalySound : chimeSounds[Math.floor(Math.random() * chimeSounds.length)];

        // Randomly trigger chime sounds to simulate knocking
        setInterval(() => {
            const audio = new Audio(soundFile);
            audio.play();
        }, (Math.random() * 10000) + 5000); // Between 5 to 15 seconds
    }

    // Generate rain
    generateRain();
});

function generateRain() {
    const rainfall = document.getElementById('rainfall');
    const interval = setInterval(() => {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * window.innerWidth}px`;
        raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // 0.5 to 1 second
        rainfall.appendChild(raindrop);

        // Remove raindrop after it falls
        setTimeout(() => {
            rainfall.removeChild(raindrop);
        }, 1000); // Matches longest possible animation duration
    }, 100);

    // Stop generating rain after some time if needed
    // clearTimeout(interval);
}
