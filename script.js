document.addEventListener('DOMContentLoaded', () => {
    const chimeBox = document.getElementById('chimeBox');
    const windSound = document.getElementById('windSound');
    windSound.play(); // Start the wind sound loop
    
    const chimeSounds = ['chime1.mp3', 'chime2.mp3', 'chime3.mp3', 'chime4.mp3']; // Regular chime sounds
    const anomalySound = 'anomaly.mp3'; // Anomalous chime sound
    const chimeCount = 5; // Total chimes including the anomaly
    
    // Create chimes and assign sounds
    for (let i = 0; i < chimeCount; i++) {
        const chime = document.createElement('div');
        chime.classList.add('chime');
        chimeBox.appendChild(chime);
        
        // Determine if the current chime is the anomaly
        const soundFile = (i === chimeCount - 1) ? anomalySound : chimeSounds[Math.floor(Math.random() * chimeSounds.length)];
        
        // Simulate chimes "knocking" into each other
        setInterval(() => {
            const audio = new Audio(soundFile);
            audio.play();
        }, (Math.random() * 10000) + 5000); // Randomize intervals between 5-15 seconds
    }
});
