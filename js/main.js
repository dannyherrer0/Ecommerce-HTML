document.addEventListener('DOMContentLoaded', function() {
    // Manejo de la categoría activa
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Eliminar la clase activa de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase activa al botón clickeado
            this.classList.add('active');
        });
    });

    // Manejo de favoritos
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Toggle de la clase para cambiar el estilo
            this.classList.toggle('active');
            
            // Cambiar el icono
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });

    // Navegación entre páginas
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // Redirigir a la página de detalle
            window.location.href = 'views/detail.html';
        });
    });

    // Botón del carrito en la navegación
    const cartButton = document.querySelector('.nav-item:nth-child(2)');
    if (cartButton) {
        cartButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirigir a la página de checkout
            window.location.href = 'views/checkout.html';
        });
    }
});