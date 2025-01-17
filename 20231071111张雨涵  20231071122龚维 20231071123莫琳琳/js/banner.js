const banners = document.querySelectorAll('.banner');
let currentIndex = 0;

function showBanner(index) {
    banners.forEach((banner, i) => {
        if (i === index) {
            banner.style.opacity = 1;
        } else {
            banner.style.opacity = 0;
        }
    });
}

function nextBanner() {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
}

setInterval(nextBanner, 3000); // 每3秒切换一次