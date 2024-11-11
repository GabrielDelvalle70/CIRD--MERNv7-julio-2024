document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('header button');
    const addDefinitionButtons = document.querySelectorAll('.defini-btn');
    const likeButtons = document.querySelectorAll('.like-btn');
    /*Script relacionado con el evento del boton "Iniciar sesión"*/
    loginButton.addEventListener('click', () => {
        if (loginButton.textContent === 'Iniciar sesión') {
            loginButton.textContent = 'Cerrar sesión';
        } else {
            loginButton.textContent = 'Iniciar sesión';
        }
    });
    /*Script relacionado con el evento del boton "Agregar definición"*/
    addDefinitionButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.display = 'none';
        });
    });

    /*Script relacionado con el evento de los botones "me gusta" y sus contadores*/
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const petTitle = button.closest('.pet').querySelector('h2').textContent;
            alert(`${petTitle} was liked`);
            const likeCount = button.querySelector('.like-count');
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });
});
