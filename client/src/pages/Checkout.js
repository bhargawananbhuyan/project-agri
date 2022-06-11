import { colors, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import RazorpayButton from "../components/landing/RazorpayButton";

function Checkout() {
	let [order, setOrder] = useState({
		name: "",
		phoneNo: "",
		email: "",
		dob: "",
		address: "",
		state: "",
		city: "",
		pinCode: "",
	});

	const handleChange = (e) => {
		setOrder({ ...order, [e.target.name]: e.target.value });
	};

	const clearData = () => {
		setOrder({
			name: "",
			phoneNo: "",
			email: "",
			dob: "",
			address: "",
			state: "",
			city: "",
			pinCode: "",
		});
	};

	return (
		<Box
			sx={{
				backgroundColor: colors.grey[100],
			}}
		>
			<Box
				sx={{
					maxWidth: 1600,
					mx: "auto",
					px: 12,
					pt: 12,
					pb: 12,
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
					gap: 3.5,
				}}
			>
				<Typography
					variant="h4"
					sx={{ gridColumn: "span 2 / auto", fontWeight: "bold" }}
				>
					Enter shipping details
				</Typography>
				<TextField
					label="Name"
					name="name"
					value={order.name}
					onChange={handleChange}
				/>
				<TextField
					label="Phone No."
					name="phoneNo"
					value={order.phoneNo}
					onChange={handleChange}
				/>
				<TextField
					label="Email ID"
					name="email"
					value={order.email}
					onChange={handleChange}
				/>
				<TextField
					label="Date of Birth"
					name="dob"
					value={order.dob}
					onChange={handleChange}
				/>
				<TextField
					label="Shipping Address"
					name="address"
					value={order.address}
					onChange={handleChange}
				/>
				<TextField
					label="State"
					name="state"
					value={order.state}
					onChange={handleChange}
				/>
				<TextField
					label="City"
					name="city"
					value={order.city}
					onChange={handleChange}
				/>
				<TextField
					label="PIN Code"
					name="pinCode"
					value={order.pinCode}
					onChange={handleChange}
				/>
				<Box
					sx={{
						gridColumn: 2,
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<RazorpayButton
						orderData={{
							amount: 1000,
							name: order.name,
							email: order.email,
							contact: order.phoneNo,
							address: order.address,
						}}
						clearFn={clearData}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default Checkout;
