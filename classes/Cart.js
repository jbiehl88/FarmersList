const Product = require("./Product")

class Cart {
	constructor() {
		this.products = []
		this.total = 0
	}

	addProduct(product) {
		if (product instanceof Product) {
			this.products.push(product)
			this.total += product.price
		}
	}

	removeProduct(product) {
		const index = product
		this.total -= this.products[index].price
		this.products.splice(index, 1)
	}
}

module.exports = Cart
