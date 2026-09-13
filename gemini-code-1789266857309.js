// Simple interactive cart counter system
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    const cartBtn = document.getElementById('cart-count');
    let count = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            if (cartBtn) {
                cartBtn.textContent = `Cart (${count})`;
            }
            alert('Item added successfully!');
        });
    });
});