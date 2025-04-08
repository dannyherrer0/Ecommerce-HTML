document.addEventListener('DOMContentLoaded', function() {
    // Botón de regresar
    const backButton = document.querySelector('.back-btn');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }

    // Modal de "Leer más"
    const readMoreBtn = document.querySelector('.read-more-btn');
    const modal = document.getElementById('read-more-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');

    if (readMoreBtn && modal) {
        readMoreBtn.addEventListener('click', function() {
            modal.classList.add('show');
        });
    }

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', function() {
            modal.classList.remove('show');
        });
    }

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Manejo del contador de cantidad
    const decreaseBtn = document.querySelector('.quantity-btn.decrease');
    const increaseBtn = document.querySelector('.quantity-btn.increase');
    const quantitySpan = document.querySelector('.quantity');

    if (decreaseBtn && increaseBtn && quantitySpan) {
        let quantity = 1;

        decreaseBtn.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                updatePrice();
            }
        });

        increaseBtn.addEventListener('click', function() {
            quantity++;
            quantitySpan.textContent = quantity;
            updatePrice();
        });

        // Actualizar el precio según la cantidad
        function updatePrice() {
            const basePrice = 162.99;
            const totalPrice = (basePrice * quantity).toFixed(2);
            const buyBtn = document.querySelector('.buy-btn span');
            
            if (buyBtn) {
                buyBtn.textContent = `Add to Cart | $${totalPrice}`;
            }
        }
    }

    // Manejo de selección de talla
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase activa al botón clickeado
            this.classList.add('active');
        });
    });

    // Manejo de selección de color
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            colorButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase activa al botón clickeado
            this.classList.add('active');
        });
    });

    // Botón de añadir al carrito
    const addToCartBtn = document.querySelector('.buy-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Redirigir a la página de checkout
            window.location.href = '../views/checkout.html';
        });
    }

    // Manejo del botón de favoritos
    const favoriteBtn = document.querySelector('.favorite-btn');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            // Toggle de la clase para cambiar el estilo
            this.classList.toggle('active');
            
            // Cambiar el icono
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-heart')) {
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            }
        });
    }
});