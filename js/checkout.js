document.addEventListener('DOMContentLoaded', function() {
    // Botón de regresar
    const backButton = document.querySelector('.back-btn');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }

    // Manejo de los contadores de cantidad
    const decreaseBtns = document.querySelectorAll('.quantity-btn.decrease');
    const increaseBtns = document.querySelectorAll('.quantity-btn.increase');
    
    decreaseBtns.forEach(button => {
        button.addEventListener('click', function() {
            const quantitySpan = this.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantitySpan.textContent);
            
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotals();
            }
        });
    });
    
    increaseBtns.forEach(button => {
        button.addEventListener('click', function() {
            const quantitySpan = this.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantitySpan.textContent);
            
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotals();
        });
    });

    // Actualizar totales
    function updateTotals() {
        // En una aplicación real, esto calcularía los totales en base a los productos
        // Para este ejemplo, usamos valores estáticos
        const subtotal = 1014.95;
        const totalItemsElement = document.querySelector('.summary-item:first-child .amount');
        const subtotalElement = document.querySelector('.summary-item.total .amount');
        
        if (totalItemsElement && subtotalElement) {
            totalItemsElement.textContent = `$${subtotal.toFixed(2)}`;
            subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        }
    }

    // Botón de pago
    const payButton = document.querySelector('.pay-btn');
    const paymentModal = document.getElementById('payment-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');

    if (payButton) {
        payButton.addEventListener('click', function() {
            // En una aplicación real, aquí se procesaría el pago
            
            // Mostrar modal de confirmación
            if (paymentModal) {
                paymentModal.classList.add('show');
                
                // Completar el contenido del modal si no existe
                if (!paymentModal.querySelector('.success-icon')) {
                    const modalContent = paymentModal.querySelector('.modal-content');
                    modalContent.innerHTML = `
                        <button class="close-modal-btn">&times;</button>
                        <div class="success-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h2>¡Pago Exitoso!</h2>
                        <p>Tu compra ha sido procesada correctamente. Recibirás un correo electrónico con los detalles de tu pedido.</p>
                        <button class="pay-btn" id="back-to-shopping">Volver a la tienda</button>
                    `;
                    
                    // Añadir evento al botón dentro del modal
                    const backToShoppingBtn = modalContent.querySelector('#back-to-shopping');
                    if (backToShoppingBtn) {
                        backToShoppingBtn.addEventListener('click', function() {
                            window.location.href = '../index.html';
                        });
                    }
                    
                    // Añadir evento al botón de cerrar
                    const newCloseBtn = modalContent.querySelector('.close-modal-btn');
                    if (newCloseBtn) {
                        newCloseBtn.addEventListener('click', function() {
                            paymentModal.classList.remove('show');
                        });
                    }
                }
            }
        });
    }

    if (closeModalBtn && paymentModal) {
        closeModalBtn.addEventListener('click', function() {
            paymentModal.classList.remove('show');
        });
    }

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === paymentModal) {
            paymentModal.classList.remove('show');
        }
    });

    // Botón de opciones de producto
    const moreOptionsBtns = document.querySelectorAll('.more-options-btn');
    moreOptionsBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Aquí se podría mostrar un menú con opciones como eliminar producto
            console.log('Mostrar opciones para este producto');
        });
    });
});