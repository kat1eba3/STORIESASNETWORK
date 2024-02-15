document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');

    loader.addEventListener('click', function () {
        // Toggle the split animation directly on the spans
        this.querySelectorAll('span').forEach((span, index) => {
            span.classList.toggle('split', !span.classList.contains('split'));
        });
    });
});
