import { Close } from '@mui/icons-material'
import {
	Button,
	colors,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	Typography,
	useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rating } from '../components/landing/Accessories'
import ProductDetails from '../components/landing/ProductDetails'
import { shopProducts } from '../utils/shopProducts'

function Shop() {
	const theme = useTheme()
	const classes = useStyles(theme)
	const navigate = useNavigate()

	let [productData, setProductData] = useState({})
	let [openDialog, setOpenDialog] = useState(false)

	const handleDialogOpen = ({ id }) => {
		setOpenDialog(true)
		setProductData(shopProducts[id - 1])
	}

	const handleDialogClose = () => {
		setProductData({})
		setOpenDialog(false)
	}

	useLayoutEffect(() => {
		document.documentElement.scrollTop = 0
	}, [])

	return (
		<>
			<Box sx={classes.shopRoot}>
				<Box sx={classes.shopContent}>
					<Typography variant='h4'>SHOP NOW</Typography>
					<Box sx={classes.shopGrid}>
						{shopProducts.map((product, i) => (
							<Box key={i} sx={classes.productCard}>
								<Typography component='caption'>
									{product.description.delivery}
								</Typography>

								<Box>
									<Box component='section'>
										<Rating rating={5} />
										<Typography variant='h5'>{product.name}</Typography>
										<Typography paragraph>
											{product.description.engine}
										</Typography>
										{product.description?.price && (
											<Typography component='div'>
												Rs. {product.description.price}
											</Typography>
										)}
										<Button
											variant='outlined'
											onClick={() => handleDialogOpen({ id: product.id })}
										>
											view more
										</Button>
									</Box>
									<img src={`/assets/${product.image}`} alt='' />
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			</Box>

			<Dialog
				open={openDialog}
				onClose={handleDialogClose}
				fullWidth
				maxWidth={'100vw'}
				sx={{ mx: -3.5, mb: -3.5 }}
			>
				<DialogTitle sx={{ p: 3.5, display: 'flex', justifyContent: 'flex-end' }}>
					<IconButton onClick={handleDialogClose}>
						<Close />
					</IconButton>
				</DialogTitle>
				<DialogContent
					sx={{
						p: 12.5,
						[theme.breakpoints.down('md')]: {
							p: 3.5,
						},
					}}
				>
					<Box
						sx={{
							display: 'flex',
							gap: 12.5,
							[theme.breakpoints.down('md')]: {
								flexDirection: 'column',
							},
						}}
					>
						<Box
							sx={{
								backgroundColor: colors.grey[200],
								maxWidth: 650,
								width: '100%',
								height: 450,
								position: 'relative',
								borderRadius: 5,
								'& img': {
									position: 'absolute',
									bottom: -150,
									right: 0,
									width: '100%',
									height: 'auto',
								},
								[theme.breakpoints.down('sm')]: {
									height: 300,
									borderRadius: 2.5,
									'& img': {
										bottom: -125,
									},
								},
							}}
						>
							<img src={`/assets/${productData.image}`} alt='' />
						</Box>
						<Box
							sx={{
								maxWidth: 650,
								'& h4, h5': { fontWeight: 'bold' },
								'& h5': { color: colors.yellow[800], fontSize: 34, my: 2.5 },
								[theme.breakpoints.down('md')]: {
									'& h4': { fontSize: 27 },
									'& h5': { fontSize: 24 },
								},
							}}
						>
							<Typography variant='h4'>{productData.name}</Typography>
							{productData.description?.price && (
								<Typography component='div' variant='h5' sx={{ mt: 1.5 }}>
									Rs. {productData.description.price}
								</Typography>
							)}
							<Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 2.5 }}>
								<Rating rating={5} />
								<Typography sx={{ ml: 2.5, fontSize: 18 }}>(10 reviews)</Typography>
							</Box>
							<Typography
								sx={{
									fontSize: 18.5,
									lineHeight: 1.75,
									color: colors.grey[700],
									my: 5,
									[theme.breakpoints.down('md')]: {
										fontSize: 16.5,
									},
								}}
							>
								{productData.additional_info ? (
									productData.additional_info.map((i, j) => (
										<div key={j}>{i}</div>
									))
								) : (
									<></>
								)}
							</Typography>
							<Box
								sx={{
									'& button': {
										textTransform: 'capitalize',
										fontSize: 18,
										borderRadius: 10,
										pl: 3,
										pr: 5,
										py: 1,
										fontWeight: 'bold',
										'&:nth-of-type(1)': {
											borderColor: colors.grey[600],
											color: colors.grey[600],
											mr: 1,
										},
										'&:nth-of-type(2)': {
											backgroundColor: colors.grey[800],
											color: 'whitesmoke',
										},
									},

									[theme.breakpoints.down('md')]: {
										'& button': {
											fontSize: 16.5,
										},
									},
								}}
							>
								<Button variant='outlined'>Share</Button>
								<Button
									variant='contained'
									disableElevation
									disableRipple
									onClick={() => {
										navigate(`/checkout?id=${productData.id}`)
									}}
								>
									Shop now
								</Button>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							gap: 2.5,
							flexWrap: 'wrap',
							mt: 15,
							justifyContent: 'center',
							[theme.breakpoints.down('md')]: {
								mt: 8.5,
							},
						}}
					>
						{[...new Array(8)].map((i) => (
							<Box
								key={i}
								sx={{
									height: 125,
									width: 125,
									backgroundColor: colors.grey[200],
									borderRadius: 2.5,
								}}
							/>
						))}
					</Box>
					<Divider sx={{ my: 7.5, borderColor: colors.grey[200] }} />

					<ProductDetails
						description={productData.description ?? {}}
						additional_info={productData.additional_info ?? []}
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}

const useStyles = (theme) => ({
	shopRoot: {
		backgroundColor: colors.grey[100],
		pt: 5,
		px: 5,
		[theme.breakpoints.down('md')]: {
			px: 0,
		},
	},
	shopContent: {
		maxWidth: 1600,
		mx: 'auto',
		backgroundColor: 'white',
		px: 12,
		pt: 12,
		pb: 21,
		borderRadius: 5,

		'& h4': {
			fontWeight: 'bold',
			textAlign: 'center',
			mb: 12.5,
		},
		[theme.breakpoints.down('md')]: {
			px: 2.5,
			// mx: 2.5,
			pt: 5,
			borderRadius: 0,

			'& h4': {
				fontSize: 24,
				mb: 5,
			},
		},
	},
	shopGrid: {
		display: 'grid',
		gridAutoRows: '500px',
		gap: 15,
		[theme.breakpoints.down('md')]: {
			gridAutoRows: '450px',
			gap: 20,
		},
	},
	productCard: {
		backgroundColor: colors.grey[200],
		borderRadius: 5,
		p: 10,
		position: 'relative',
		'& caption': {
			position: 'absolute',
			top: 0,
			right: 0,
			background: 'linear-gradient(to right, #d53127, #d55827)',
			fontWeight: 'bold',
			color: 'whitesmoke',
			px: 5,
			py: 2.5,
			fontSize: 20,
			borderBottomLeftRadius: 20,
			borderTopRightRadius: 20,
		},

		'& img': {
			position: 'absolute',
			right: 0,
			bottom: -165,
			height: 'auto',
			width: 650,
		},
		'& section': {
			'& h5': {
				fontWeight: 'bold',
				fontSize: 32,
				mt: 2,
			},
			'& p': {
				fontWeight: 300,
				fontSize: 24,
				color: colors.grey[600],
				mt: 1,
				mb: 2.5,
			},
			'& div': {
				fontSize: 27,
				fontWeight: 'bold',
			},
			'& button': {
				mt: 5,
				borderRadius: 10,
				color: colors.grey[800],
				fontWeight: 'bold',
				textTransform: 'lowercase',
				fontSize: 18,
				borderColor: colors.grey[800],
			},
		},
		[theme.breakpoints.down('md')]: {
			px: 3.5,
			pt: 8.5,
			'& img': {
				width: 350,
				right: -25,
			},
			'& section': {
				'& h5': {
					fontSize: 21,
					mt: 0,
				},
				'& p': {
					fontSize: 18,
				},
				'& div': {
					fontSize: 21,
				},
				'& button': {
					fontSize: 16.5,
					mt: 2.5,
				},
			},
			'& caption': {
				fontSize: 16,
				px: 2.5,
				py: 1.5,
			},
		},
	},
})

export default Shop
