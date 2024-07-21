const markAll = document.querySelector('#mark-all');
const posts = document.querySelectorAll('.post');

markAll.addEventListener('click', marcarVistoTodos);

posts.forEach(status => {
    status.addEventListener('click', () => {
        status.querySelector('.status').classList.remove('not-read');
        status.classList.remove('bg-Very-light-grayish-blue');
        
        // Actualiza las notificaciones
        const notReadActual = document.querySelectorAll('.not-read');
        number.innerHTML = notReadActual.length;
    });
})

function marcarVistoTodos() {
    const notRead = document.querySelectorAll('.not-read');
    const bgNotRead = document.querySelectorAll('.bg-Very-light-grayish-blue');
    const number = document.querySelector('#number');

    notRead.forEach(e => {
        e.classList.remove('not-read');
    });

    bgNotRead.forEach(bg => {
        bg.classList.remove('bg-Very-light-grayish-blue');
    })

    // Resetea las notifiaciones a 0
    if (number.innerHTML > 0) {
        number.innerHTML = 0;
    }
}