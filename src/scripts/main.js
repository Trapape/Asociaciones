
export function handleScroll() {
    window.addEventListener('scroll', function() {
        const backToTop = document.querySelector('.back-to-top');
        if (window.pageYOffset > 100) {
            backToTop.style.opacity = 1;
        } else {
            backToTop.style.opacity = 0;
        }
    });

    document.querySelector('.back-to-top').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


