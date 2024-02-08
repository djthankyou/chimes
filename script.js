document.addEventListener('DOMContentLoaded', () => {
    const chimeBox = document.getElementById('chimeBox');
    const chimeCount = 8; // Number of chimes, adjust as desired
    const sounds = ['chime1.mp3', 'chime2.mp3', 'chime3.mp3', 'chime4.mp3', 'anomaly.mp3']; // Example sound names

    for (let i = 0; i < chimeCount; i++) {
        const chime = document.createElement('div');
        chime.classList.add('chime');
        chime.dataset.sound = sounds[i % sounds.length]; // Cycle through sounds, last one can be the anomaly
        chime.addEventListener('click', () => playSound(chime.dataset.sound));
        chimeBox.appendChild(chime);
    }

    function playSound(soundFile) {
        const audio = new Audio(soundFile);
        audio.play().catch(err => console.error("Error playing the sound:", err));
    }
});
