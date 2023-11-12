let banners = document.querySelectorAll('.swap_banner_container a');
let interval = 5000; // Default interval in milliseconds
let rotationTimer;
let currentIndex = 0;

function rotateBanners() {
    currentIndex = (currentIndex + 1) % banners.length;
    banners.forEach((element, index) => {
        banners[index].style.transform = `translateX(${-100 * currentIndex}%)`;
    });
    //banners[(currentIndex + banners.length - 1) % banners.length].style.transform = 'translateX(100%)';
}

function startRotation() {
    rotationTimer = setInterval(rotateBanners, interval);
}

function stopRotation() {
    clearInterval(rotationTimer);
}

function changeInterval() {
    stopRotation();
    interval = document.getElementById('interval').value * 1000; // Converting to milliseconds
    startRotation();
}

document.getElementById('changeInterval').addEventListener('click', (event) => {
    event.preventDefault();
    const newInterval = parseInt(document.getElementById('interval').value, 10) * 1000;
    if (!isNaN(newInterval)) {
        interval = newInterval;
        stopRotation();
        startRotation();
    }
});

// Event listeners for tab/window focus and blur to start/stop rotation
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        startRotation();
    } else {
        stopRotation();
    }
});

// Initial setup
banners.forEach((banner, index) => {
    // if (index == 1) {
    //     banner.style.transform = 'translateX(100%)';
    // } else if (index == 2) {
    //     banner.style.transform = 'translateX(100%)';
    // }
});
startRotation();
