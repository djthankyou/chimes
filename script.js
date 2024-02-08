document.addEventListener('DOMContentLoaded', () => {
    const chimeBox = document.getElementById('chimeBox');
    const windSound = document.getElementById('windSound');
    const chimeCount = 8; // Adjust the number of chimes as desired
    const chimeSounds = ['chime1.mp3', 'chime2.mp3', 'chime3.mp3', 'chime4.mp3']; // Example sound names
    windSound.play();

    for (let i = 0; i < chimeCount; i++) {
        const chime = document.createElement('div');
        chime.classList.add('chime');
        chimeBox.appendChild(chime);
        // Randomly play chime sounds to simulate knocking
        setInterval(() => {
            const soundIndex = Math.floor(Math.random() * chimeSounds.length);
            const audio = new Audio(chimeSounds[soundIndex]);
            audio.play();
        }, (Math.random() * 10000) + 5000); // Randomize time between 5-15 seconds
    }
});
