const readlineSync = require('readline-sync');

class Product {
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addToCart(product, quantity = 1) {
        for (let m = 0; m < quantity; m++) {
            this.items.push(product);
        }
        console.log(`${quantity} ${product.name}(s) added to the cart.`);
    }

    viewCart() {
        console.log('Shopping Cart:');
        this.items.forEach((item) => {
            console.log(`${item.name} - $${item.amount}`);
        });
        console.log(`Total: $${this.calculateTotal()}`);
    }

    calculateTotal() {
        return this.items.reduce((acc, item) => acc + item.amount, 0);
    }
}

function promptForProduct() {
    const productId = readlineSync.question('Enter product ID: ');
    const productName = readlineSync.question('Enter product name: ');
    const productAmount = parseFloat(readlineSync.question('Enter product amount: '));

    return new Product(productId, productName, productAmount);
}

function main() {
    const shoppingCart = new ShoppingCart();

    // Prompt the user for product details
    const numItems = parseInt(readlineSync.question('Enter the number of items you want to add: '), 10);

    for (let m = 0; m < numItems; m++) {
        const product = promptForProduct();
        shoppingCart.addToCart(product);
    }

    // View the shopping cart
    shoppingCart.viewCart();

    // Calculate and display the total amount
    console.log('Thank you for your patronage!');
}

// Run the main function
main();
