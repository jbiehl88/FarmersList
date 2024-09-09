const Customer = require("./Customer")

class Auth {
	constructor() {
		this.customers = []
	}

	register(name, email, shippingAddress) {
		let newCust = new Customer(name, email, shippingAddress)
		this.customers.push(newCust)
	}

	login(email) {
		let cust = this.customers
		for (let i = 0; i < cust.length; i++) {
			if (cust[i].email == email) {
				return cust[i]
			} else {
				return null
			}
		}
	}
}

module.exports = Auth
