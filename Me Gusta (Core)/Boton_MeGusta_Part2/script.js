/*Script con los diferentes eventos ligados a los 3 botones de like y sus contadores de likes*/
document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        { button: '#like-button-1', count: '#like-count-1' },
        { button: '#like-button-2', count: '#like-count-2' },
        { button: '#like-button-3', count: '#like-count-3' }
    ];

    posts.forEach(post => {
        const likeButton = document.querySelector(post.button);
        const likeCount = document.querySelector(post.count);

        likeButton.addEventListener('click', () => {
            let count = parseInt(likeCount.textContent);
            count++;
            likeCount.textContent = `${count} like(s)`;
        });
    });
});



    