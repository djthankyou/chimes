document.addEventListener('DOMContentLoaded', () => {
    const chimeBox = document.getElementById('chimeBox');
    const chimeSounds = ['chime1.mp3', 'chime2.mp3', 'chime3.mp3', 'chime4.mp3']; // Regular chime sounds
    const anomalySound = 'anomaly.mp3'; // Anomaly sound
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
        }, getRandomTime(5000, 15000)); // Randomize intervals between 5 to 15 seconds
    }
});

function getRandomTime(min, max) {
    return Math.random() * (max - min) + min;
}
