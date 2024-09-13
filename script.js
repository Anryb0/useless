        document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];
    const cartList = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');

    document.querySelectorAll('.but').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productName = product.querySelector('h3').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', '').replace(/\s/g, ''));

            addToCart(productName, productPrice);
        });
    });

    // Функция добавления товара в корзину
    function addToCart(name, price) {
        const existingItem = cartItems.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ name, price, quantity: 1 });
        }

        updateCart();
    }

    // Обновляем корзину
    function updateCart() {
        cartList.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;

            const li = document.createElement('li');
            li.innerText = `${item.name} - $${item.price} x ${item.quantity}`;

            const removeButton = document.createElement('button');
            removeButton.innerText = 'Удалить';
            removeButton.className = 'remove-button';

            removeButton.addEventListener('click', () => removeFromCart(item.name));
            li.appendChild(removeButton);

            cartList.appendChild(li);
        });

        totalPriceDisplay.innerText = `Общая стоимость: $${totalPrice}`;
    }

    // Удаляем товар из корзины
    function removeFromCart(itemName) {
        const itemIndex = cartItems.findIndex(item => item.name === itemName);

        if (itemIndex !== -1) {
            cartItems[itemIndex].quantity -= 1;
            if (cartItems[itemIndex].quantity === 0) {
                cartItems.splice(itemIndex, 1);
            }
        }

        updateCart();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const detailsButtons = document.querySelectorAll('.details-button');
    const closeButton = document.querySelector('.close-button');
    const modalDescription = document.querySelector('.modal-description');

    // Открыть модальное окно для каждого товара
    detailsButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвратить переход по ссылке
            modalDescription.textContent = button.getAttribute('data-description');
            modal.style.display = 'block';
        });
    });

    // Закрыть модальное окно
    closeButton.addEventListener('click', function () {
        modal.classList.add('fade-out'); // Добавить класс для анимации затухания
        setTimeout(() => {
            modal.style.display = 'none'; // Скрыть окно после завершения анимации
            modal.classList.remove('fade-out'); // Удалить класс, чтобы избежать проблем при повторном открытии
        }, 500);
    });

    // Закрыть модальное окно при щелчке вне его
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});