import { Button, colors } from "@mui/material";
import axios from "axios";

const loadRazorpay = () =>
	new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = "https://checkout.razorpay.com/v1/checkout.js";
		script.onload = () => resolve("razorpay integration success");
		script.onerror = () => reject("razorpay integration error");
		document.body.appendChild(script);
	});

function RazorpayButton({ orderData, clearFn }) {
	const handleRazorpay = async (e) => {
		if (
			!orderData.email ||
			!orderData.amount ||
			!orderData.name ||
			!orderData.contact ||
			!orderData.address
		) {
			return console.log("please enter all fields");
		}

		try {
			const res = await axios({
				url: "http://localhost:5000/payment/createOrder",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				data: { amount: orderData.amount },
			});
			const data = await res.data;
			await loadRazorpay();
			const options = {
				key: "rzp_test_HC0U5BLbRiHR3p",
				amount: data.amount.toString(),
				currency: data.currency,
				name: "George Maijo Agri",
				description: "Dummy description for GMA",
				order_id: data.id,
				image: "/logo192.png",
				handler: (res) => {
					if (
						res.razorpay_payment_id &&
						res.razorpay_order_id &&
						res.razorpay_signature
					) {
						console.log("order placed successfully");
						clearFn();
					}
				},
				prefill: {
					name: orderData.name,
					email: orderData.email,
					contact: orderData.contact,
				},
				notes: {
					address: orderData.address,
				},
				theme: {
					color: "#3399cc",
				},
			};

			const razorPay = new window.Razorpay(options);
			razorPay.open();
			e.preventDefault();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Button
			onClick={handleRazorpay}
			type="submit"
			sx={{
				backgroundColor: colors.red[500],
				py: 1.5,
				textTransform: "capitalize",
				fontSize: 18,
				fontWeight: "bold",
				color: "whitesmoke",
				width: 150,
				"&:hover": {
					backgroundColor: colors.red[500],
				},
			}}
		>
			Next
		</Button>
	);
}

export default RazorpayButton;
