const products = [
    { id: 1, name: 'Laptop', price: 1000, image: 'https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=' },
    { id: 2, name: 'Smartphone', price: 500, image: 'https://media.istockphoto.com/id/1405838999/photo/smartphone-similar-to-iphone-13-with-blank-white-screen-for-infographic-global-business.jpg?s=612x612&w=0&k=20&c=9TepRpLd4rCpWXW3aNhdyGmbInO0huFkensTj1JUM6U=' },
    { id: 3, name: 'Tablet', price: 300, image: 'https://m.media-amazon.com/images/I/61upvc2lodL._AC_UF1000,1000_QL80_.jpg' },
    { id: 4, name: 'Headphones', price: 100, image: 'https://t3.ftcdn.net/jpg/00/91/07/82/360_F_91078252_i7cx2uJzDzgoJGDdUAHtVAcpjugVauX9.jpg' },
    { id: 5, name: 'Smartwatch', price: 200, image: 'https://media.istockphoto.com/id/515311485/vector/smart-watch.jpg?s=612x612&w=0&k=20&c=pGojRXDoolMxGxTPdWLeynWxe0e1GqblskkI8NHwXvI=' },
    { id: 6, name: 'Camera', price: 600, image: 'https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU=' },
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    document.getElementById('signin-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign in successful');
        closeModal('signin');
    });
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
}

function showSignIn() {
    document.getElementById('signin').style.display = 'block';
}

function showCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
    document.getElementById('cart-total').innerText = 'Total: $' + cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('cart').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function checkout() {
    alert('Checkout successful');
    cart = [];
    document.getElementById('cart-count').innerText = 0;
    closeModal('cart');
}
