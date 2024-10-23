document.addEventListener('scroll', function() {
    const droneImage = document.getElementById('droneImage');
    const scrollPosition = window.scrollY;

    // Появление дрона при скролле вниз на 300px
    if (scrollPosition > 300) {
        droneImage.classList.add('visible-drone');
    } else {
        droneImage.classList.remove('visible-drone');
    }
});
