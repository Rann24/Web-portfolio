
document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementsByClassName('close')[0];

    // Get the images and add click event listeners
    const chromeImage = document.getElementById('Chrome.jpg');
    const musicImage = document.getElementById('ya.jpg');

    chromeImage.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = chromeImage.src;
    });

    musicImage.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = musicImage.src;
    });

    // When the user clicks on <span> (x), close the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
