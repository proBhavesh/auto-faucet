const User = require("../model/userSchema");
require("../db/connect");

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

const signupHandle = async (req, res) => {
	const { name, email, password, cpassword } = req.body;
	if (!name || !email || !password || !cpassword) {
		return res.status(422).json({ error: "Some fields are empty" });
	}

	try {
		const userExist = await User.findOne({ email: email });

		if (userExist) {
			return res.status(422).json({ error: "Email Exists" });
		} else if (password != cpassword) {
			return res.status(422).json({ error: "passwords don't match" });
		} else {
			const user = new User({
				name,
				email,
				password,
				cpassword,
			});

			await user.save();
			res.status(201).json({
				message: "user registered successfully",
			});
		}
	} catch (err) {
		console.log(err);
	}
};

// <-------------------------LOGIN HANDLE ------------------------------------>

const loginHandle = (req, res) => {
	res.send("This is login handle");
};

// <-------------------------Module Export ------------------------------------>
module.exports = { homeHandle, paymentHandle, signupHandle, loginHandle };
