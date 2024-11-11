/*Script con los eventos relacionados al boton Like y su contador de likes*/
document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('#like-button');
    const likeCount = document.querySelector('#like-count');

    likeButton.addEventListener('click', () => {
        let count = parseInt(likeCount.textContent);
        count++;
        likeCount.textContent = `${count} like(s)`;
    });
});
