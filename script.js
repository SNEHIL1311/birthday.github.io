document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('cake-screen').classList.remove('hidden');
});

document.getElementById('blow-candles-button').addEventListener('click', function() {
    document.getElementById('cake-screen').classList.add('hidden');
    document.getElementById('cut-cake-screen').classList.remove('hidden');
});

document.getElementById('cut-cake-button').addEventListener('click', function() {
    document.getElementById('cut-cake-screen').classList.add('hidden');
    document.getElementById('celebration-screen').classList.remove('hidden');
    
    startBalloons();
});

function startBalloons() {
    const balloonContainer = document.getElementById('balloons');
    
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloons';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();
        balloonContainer.appendChild(balloon);
    }
}

function getRandomColor() {
    const colors = ['#ff4081', '#ffeb3b', '#4caf50', '#00bcd4', '#ff5722'];
    return colors[Math.floor(Math.random() * colors.length)];
}
