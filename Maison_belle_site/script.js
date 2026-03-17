// Example JavaScript for handling cart functionality
document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
            // Here you would add the product to the user's cart
        });
    });
});
