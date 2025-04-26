// Pellets disappear on click
document.querySelectorAll('.pellet').forEach((pellet) => {
    pellet.addEventListener('click', () => {
        pellet.style.display = 'none'; // Make pellet disappear
    });
});

// Pac-Man Animation for Header
const pacman = document.getElementById('pacman');
let position = 0;

function movePacman() {
    position += 2;
    pacman.style.transform = `translateX(${position}px)`;

    if (position > window.innerWidth) {
        position = -50; // Reset position when Pac-Man goes off-screen
    }

    requestAnimationFrame(movePacman);
}

movePacman();

// Ghost Hover Effects
document.querySelectorAll('.ghost-icon').forEach((ghost) => {
    ghost.addEventListener('mouseenter', () => {
        ghost.style.filter = 'brightness(1.5)';
    });

    ghost.addEventListener('mouseleave', () => {
        ghost.style.filter = 'brightness(1)';
    });
});

// Load sound effects
const wakaSound = new Audio('sounds/waka.mp3');
const deathSound = new Audio('sounds/death.mp3');

// Play waka sound on hovering over navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        wakaSound.play();
    });
});

// Play death sound on clicking Pac-Man
document.getElementById('animated-pacman').addEventListener('click', () => {
    deathSound.play();
});
