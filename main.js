const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const randomizeButton = document.getElementById('randomize');
const downloadButton = document.getElementById('download');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColors() {
    color1Input.value = getRandomColor();
    color2Input.value = getRandomColor();
    drawGradient();
}

function downloadWallpaper() {
    const link = document.createElement('a');
    link.download = 'wallpaper.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function setCanvasSize() {
    const preview = document.querySelector('.preview');
    const previewWidth = preview.offsetWidth;
    canvas.width = previewWidth;
    canvas.height = previewWidth / (16 / 9);
    drawGradient();
}

color1Input.addEventListener('input', drawGradient);
color2Input.addEventListener('input', drawGradient);
randomizeButton.addEventListener('click', setRandomColors);
downloadButton.addEventListener('click', downloadWallpaper);

window.addEventListener('resize', setCanvasSize);

// Initial setup
setCanvasSize();
