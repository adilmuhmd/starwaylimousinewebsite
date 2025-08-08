document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
        container: document.getElementById('lottie-animation'), // The DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // New, stable animation data from LottieFiles CDN
        path: 'https://lottie.host/cf43d7b9-9134-4b5a-941a-81928a301a53/y9l2mG02Gh.json'
    });
});