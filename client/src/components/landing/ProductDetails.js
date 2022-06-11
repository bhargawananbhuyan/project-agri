import {
	colors,
	Tab,
	Tabs,
	TabScrollButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 7.5 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</Box>
	);
}
function allyProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
const StyledTabScrollButton = styled(TabScrollButton)`
	& svg {
		color: whitesmoke;
	}
`;

const ProductDetailsTab = ({ description, additional_info }) => {
	const theme = useTheme();
	const classes = useStyles(theme);

	let [tabValue, setTabValue] = useState(0);
	const matchSmall = useMediaQuery("(max-width:900px)");

	return (
		<Box sx={classes.tabsRoot}>
			<Tabs
				sx={classes.tabs}
				value={tabValue}
				onChange={(e, n) => setTabValue(n)}
				centered={!matchSmall}
				indicatorColor="none"
				textColor="inherit"
				variant={matchSmall ? "scrollable" : "standard"}
				scrollButtons={matchSmall}
				allowScrollButtonsMobile={matchSmall}
				ScrollButtonComponent={StyledTabScrollButton}
			>
				<Tab
					label="Description"
					sx={{
						fontWeight: 600,
						fontSize: 18,
						[theme.breakpoints.down("md")]: {
							fontSize: 16,
						},
					}}
					{...allyProps(0)}
				/>
				<Tab
					label="Additional Info"
					sx={{
						fontWeight: 600,
						fontSize: 18,
						[theme.breakpoints.down("md")]: {
							fontSize: 16,
						},
					}}
					{...allyProps(1)}
				/>
				<Tab
					label="Accessories"
					sx={{
						fontWeight: 600,
						fontSize: 18,
						[theme.breakpoints.down("md")]: {
							fontSize: 16,
						},
					}}
					{...allyProps(2)}
				/>
			</Tabs>
			<Box sx={classes.tabsContent}>
				<TabPanel
					value={tabValue}
					index={0}
					sx={{
						"& .description:nth-of-type(2n-1)": {
							backgroundColor: colors.grey[300],
						},
					}}
				>
					<Box>
						{Object.keys(description).map((key, i) => (
							<Box
								key={i}
								className="description"
								sx={{
									display: "flex",
									justifyContent: "space-between",
									"& p": {
										fontSize: 18.5,
										"&:first-child": {
											fontWeight: "bold",
											textTransform: "capitalize",
										},
									},
									pt: 3,
									pb: 1,
									px: 5,
									borderRadius: 2.5,
									[theme.breakpoints.down("md")]: {
										px: 2.5,
										mx: -5,
										flexDirection: "column",
										"& p": {
											mt: -1,
											"&:nth-of-type(2)": {
												fontSize: 16.5,
											},
										},
									},
								}}
							>
								<Typography paragraph>{key.replaceAll("_", " ")}</Typography>
								<Typography paragraph>{description[key]}</Typography>
							</Box>
						))}
					</Box>
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					<Typography
						sx={{
							fontSize: 18.5,
							lineHeight: 1.75,
							[theme.breakpoints.down("md")]: {
								fontSize: 16.5,
								mx: -3.5,
							},
						}}
					>
						{additional_info.map((info, i) => (
							<p key={i}>{`${i + 1}. ${info}`}</p>
						))}
					</Typography>
				</TabPanel>
				<TabPanel value={tabValue} index={2}>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							gap: 3.5,
							justifyContent: "center",
						}}
					>
						{[...new Array(4)].map((i) => (
							<Box key={i} component="section">
								<Box
									sx={{
										height: 300,
										width: 275,
										backgroundColor: colors.grey[200],
										borderRadius: 2.5,
									}}
								/>
								<Box sx={{ textAlign: "center", mt: 3.5 }}>
									<Typography sx={{ fontSize: 18.5 }}>Ripper</Typography>
									<Typography sx={{ fontWeight: "bold", mt: 1, fontSize: 21 }}>
										Rs. 10,000
									</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</TabPanel>
			</Box>
		</Box>
	);
};

function ProductDetails({ description, additional_info }) {
	return (
		<Box>
			<ProductDetailsTab
				description={description}
				additional_info={additional_info}
			/>
		</Box>
	);
}

const useStyles = (theme) => ({
	tabsRoot: {
		backgroundColor: colors.grey[100],
		borderRadius: 5,
		overflow: "hidden",
		[theme.breakpoints.down("md")]: {
			borderRadius: 2.5,
		},
	},

	tabs: {
		backgroundColor: colors.red[500],
		py: 2.5,
		px: 5,

		"& .Mui-selected": {
			color: "whitesmoke",
			backgroundColor: "rgba(255,255,255,.1)",
			borderRadius: 2.5,
		},

		"& .MuiTab-textColorInherit": {
			color: colors.grey[50],
			textTransform: "capitalize",
		},
		[theme.breakpoints.down("md")]: {
			px: 0,
			py: 1.5,
		},
	},

	tabsContent: {
		fontSize: 18.5,
	},
});

export default ProductDetails;
