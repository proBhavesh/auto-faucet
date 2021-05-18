{
	/*<-------------------------HOME HANDLE ------------------------------------>*/
}

const homeHandle = (req, res) => {
	res.send("This is my home");
};

{
	/*<-------------------------PAYMENT HANDLE ------------------------------------>*/
}

const paymentHandle = (req, res) => {
	const { product, token } = req.body;
	console.log(`Product is ${product} and price is ${product.price}`);
	const idempontencyKey = uuid();

	return stripe.customers
		.create({
			email: token.email,
			source: token_id,
		})
		.then((customer) => {
			stripe.charges
				.create({
					amount: (product.price = 10),
					currency: "usd",
					customer: customer.id,
					receipt_email: token.email,
					description: `Purchase of ${product.name}`,
				})
				.then((result) => res.status(200).json(result))
				.catch((err) => console.log(err));
		});
};

// <------------------------- SIGNUP HANDLE ------------------------------------>

const signupHandle = (req, res) => {
	res.send("This is signup handle");
};

// <-------------------------LOGIN HANDLE ------------------------------------>

const loginHandle = (req, res) => {
	res.send("This is login handle");
};

// <-------------------------Module Export ------------------------------------>
module.exports = { homeHandle, paymentHandle, signupHandle, loginHandle };
