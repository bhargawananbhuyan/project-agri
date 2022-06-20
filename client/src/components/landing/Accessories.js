import { Box, styled } from '@mui/system'
import {
	Button,
	colors,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	MenuItem,
	Select,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import { Close, ExpandMore, Star, StarBorder } from '@mui/icons-material'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ProductDetails from './ProductDetails'
import { fade, fadeOpacity, flash } from '../../utils/animations'
import { products } from '../../utils/data'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const allAccessories = [
	{
		name: 'BACK ROTARY',
		use: 'THIS ATTACHMENT IS USED FOR INTERCULTIVATION BETWEEN CROPS',
		filter: 'WM 1100C6 6 SHIFT MODEL ONLY',
		image: '/assets/accessory-3.jpg',
	},
	{
		name: 'C TYPE DITCHER',
		use: 'THIS ATTACHMENT IS USED FOR BED PREPARATION AND FURROWING OPERATION.',
		filter: 'WM 1100C6 6 SHIFT MODEL ONLY',
		image: '/assets/accessory-5.jpg',
	},
	{
		name: 'DITCHING BLADE',
		use: 'THIS ATTACHMENT IS USED FOR MAKING WATER DITCHES.',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/accessory-7.jpg',
	},
	{
		name: 'SINGLE PLOUGH',
		use: 'THIS ATTACHMENT IS USED FOR LOSSENING OF THE SOIL AND PREPARE FOR SOWING',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/accessory-10.jpg',
	},
	{
		name: 'LEVELLER',
		use: 'THIS ATTACHMENT IS USED FOR LEVELLING OF THE LAND AFTER CULTIVATION.',
		filter: 'WM 1100A6, C6 AND WM 1100C WEEDER',
		image: '/assets/accessory-9.jpg',
	},
	{
		name: '5 TYNE CULTIVATOR',
		use: 'THIS ATTACHMENT ISUSED FOR INTIAL TILLAGE IN HARD SOIL.',
		filter: 'WM 1100A6, C6 ,WM 1100C AND WM 990 WEEDER',
		image: '/assets/tyne.jpeg',
	},
	{
		name: 'TURNABLE DITCHER',
		use: 'THIS ATTACHMENT IS USED FOR LOSSENING OF THE SOIL AND PREPARE FOR SOWING',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/accessory-16.jpg',
	},
	{
		name: 'POTATO DIGGER',
		use: 'THIS ATTACHMENT IS USED FOR POTATO HARVESTING',
		filter: 'WM 1100A6, C6 AND WM 1100C WEEDER',
		image: '/assets/accessory-11.jpg',
	},

	{
		name: 'FLAT LUG CAGE WHEEL',
		use: 'THIS ATTACHMENT IS USED FOR PROVIDING BETTER TRACTION DURING OPERATIONS IN FIELD',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/accessory-4.jpg',
	},
	{
		name: 'V LUGGED CAGEWHEEL',
		use: 'THIS ATTACHMENT IS USED FOR PROVIDING BETTER TRACTION DURING OPERATIONS IN FIELD',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/lugged.jpeg',
	},
	{
		name: 'INTERLACED PADDY WHEEL',
		use: 'THIS ATTACHMENT IS USED FOR MULCHING OF THE SOIL IN WETLAND CULTIVATION',
		filter: 'WM 1100A6, C6 AND WM 1100C WEEDER',
		image: '/assets/accessory-19.jpg',
	},
	{
		name: 'TRAILER TROLLEY',
		use: 'THIS ATTACHMENT IS USED FOR TRANSPORTATION PURPOSE',
		filter: 'WM 1100A6, C6 AND WM 1100C WEEDER',
		image: '/assets/accessory-15.jpg',
	},
	{
		name: 'ANTI WIND BLADE ASSEMBLY',
		use: 'THIS ATTACHMENT IS USED FOR MULCHING OF GRASS AND WEEDS DURING TILLING OPERATION',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/accessory-2.jpg',
	},
	{
		name: 'SPIKE TYNE BLADE',
		use: 'THIS ATTACHMENT IS USED FOR LOOSENING OF THE SOIL, UPROOTING WEEDS AND BREAK THE SOIL',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/accessory-13.jpg',
	},
	{
		name: 'SPRAYER',
		use: 'THIS ATTACHMENT IS USED FOR SPRAYING INSECTIDE TO CROPS',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/accessory-6.jpg',
	},
	{
		name: 'WATER PUMP',
		use: 'THIS ATTACHMENT IS USED FOR PUMPING WATER REQUIRED FOR IRRIGATION PURPOSE',
		filter: 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER',
		image: '/assets/accessory-18.jpg',
	},
	{
		name: 'REAPER',
		use: 'THIS ATTACHMENT IS USED FORREAPING OF CROPS LIKE RICE RAGI AND CATTLE CROP',
		filter: 'WM 1100A6, C6 AND WM 1100C WEEDER',
		image: '/assets/accessory-12.jpg',
	},
	{
		name: 'SEED DRILL',
		use: 'Ths attachment is used to sow seeds like groundnut, sunflower, maize etc,. This comes with 3-5 rows seeding type.',
		filter: 'WM 1100A6, C6 AND WM 1100C WEEDER',
		image: '/assets/accessory-20.png',
	},
]

const StyledSelect = styled(Select)`
	font-weight: bold;
	border-radius: 2rem;
	padding: 0rem 1rem;
	font-size: 1.1rem;
	background: linear-gradient(to right, #d53127, #d55827);
	color: whitesmoke;
	& * {
		border: none !important;
	}
	& svg {
		color: whitesmoke;
		margin-right: 0.5rem;
	}
`
const StyledSelect1 = styled(Select)`
	font-weight: bold;
	border-radius: 2rem;
	padding: 0rem 1rem;
	font-size: 1.1rem;
	background-color: #015294;
	color: whitesmoke;
	& * {
		border: none !important;
	}
	& svg {
		color: whitesmoke;
		margin-right: 0.5rem;
	}
`

const AccessoryCard = ({ title, description, image }) => {
	const theme = useTheme()

	const match = useMediaQuery(`(max-width:600px)`)

	const [open, setOpen] = useState(false)

	return (
		<>
			<Box
				component='section'
				sx={{
					cursor: match ? 'pointer' : 'default',
				}}
				onClick={() => setOpen(match && true)}
			>
				<Box
					className='accessoryImage'
					sx={{
						height: 200,
						border: 1,
						borderColor: colors.grey[300],
						borderRadius: 2.5,
						display: 'grid',
						p: 2.5,
						placeItems: 'center',
						[theme.breakpoints.down('sm')]: {
							width: '100%',
							p: 1.5,
						},
					}}
				>
					<Box
						component='img'
						src={image}
						alt={title}
						sx={{
							height: 'auto',
							width: 150,
							[theme.breakpoints.down('sm')]: {
								width: '80%',
								borderRadius: 2.5,
								m: 0,
							},
						}}
					/>
				</Box>
				<Typography
					className='accessoryText'
					sx={{
						'& h6': {
							fontSize: 24,
							fontWeight: 'bold',
							mt: -2,
						},
						[theme.breakpoints.down('sm')]: {
							'& h6': { fontSize: '1rem', mt: 2 },
						},
					}}
				>
					<h6>
						{title?.slice(0, 1)}
						{title?.slice(1).toLowerCase()}
					</h6>
					<Typography
						sx={{
							mt: -5,
							fontSize: 16,
							lineHeight: 1.75,
							color: colors.grey[500],
							fontWeight: 300,
							[theme.breakpoints.down('sm')]: {
								display: 'none',
							},
						}}
					>
						{description?.toLowerCase()}
					</Typography>
				</Typography>
			</Box>
			<Dialog open={match && open} onClose={() => setOpen(false)} fullWidth>
				<DialogTitle
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					<IconButton onClick={() => setOpen(false)}>
						<Close />
					</IconButton>
				</DialogTitle>
				<DialogContent
					sx={{
						pb: 5,
						'& img': {
							width: 150,
							height: 'auto',
						},
					}}
				>
					<Box sx={{ display: 'grid', placeItems: 'center' }}>
						<Box component='img' src={image} />
					</Box>
					<Typography
						sx={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
							my: 2.5,
						}}
					>
						{title}
					</Typography>
					<Typography
						sx={{
							fontSize: '1.25rem',
							fontWeight: 300,
							color: colors.grey[600],
						}}
					>
						{description?.toLowerCase()}
					</Typography>
				</DialogContent>
			</Dialog>
		</>
	)
}

export const AccessoriesGrid = () => {
	const theme = useTheme()
	const classes = useStyles(theme)

	let [accessory, setAccessory] = useState('all')
	let [accessories, setAccessories] = useState(allAccessories)

	useEffect(() => {
		setAccessories(
			accessory === 'WM 1100C6 6 SHIFT MODEL ONLY'
				? allAccessories.filter((a) => a.filter === 'WM 1100C6 6 SHIFT MODEL ONLY')
				: accessory === 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER'
				? allAccessories.filter(
						(a) => a.filter === 'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER'
				  )
				: allAccessories
		)
	}, [accessory])

	useLayoutEffect(() => {
		document.querySelectorAll('.accessoryImage').forEach((el) => {
			fadeOpacity({ direction: 'bottom', duration: 1500 }).observe(el)
		})

		document.querySelectorAll('.accessoryText').forEach((el) => {
			fadeOpacity({ direction: 'bottom', duration: 1500 }).observe(el)
		})

		fade({ duration: 750, direction: 'right' }).observe(
			document.querySelector('.accessorySelect')
		)
		flash({ duration: 1500 }).observe(document.querySelector('.accessoryFlash'))
	}, [])

	const triggerRef = useRef()
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.config({ units: { width: '%' } })

		if (triggerRef?.current) {
			gsap.fromTo(
				'.__line',
				{
					width: 0,
					ease: 'circ',
					duration: 2.5,
					scrollTrigger: {
						trigger: triggerRef?.current,
					},
				},
				{
					width: 100,
					ease: 'circ',
					duration: 2.5,
					scrollTrigger: {
						trigger: triggerRef?.current,
					},
				}
			)
		}
	}, [triggerRef])

	return (
		<Box sx={classes.accessoriesGridRoot}>
			<Box sx={classes.accessoriesGridContent}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						[theme.breakpoints.down('sm')]: {
							flexDirection: 'column',
							pb: 3.5,
						},
					}}
				>
					<Typography variant='h4' className='accessoryFlash' ref={triggerRef}>
						Accessories
					</Typography>
					<Box
						sx={{
							height: 2,
							width: '100%',
							position: 'relative',
							mx: 5,
							[theme.breakpoints.down('sm')]: {
								display: 'none',
							},
						}}
					>
						<Box
							className='__line'
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: 0,
								height: '100%',
								backgroundColor: colors.grey[300],
							}}
						/>
					</Box>
					<StyledSelect
						className='accessorySelect'
						sx={{
							[theme.breakpoints.down('sm')]: {
								fontSize: 16,
								px: 1,
								mt: 2.5,
							},
						}}
						value={accessory}
						onChange={(e) => setAccessory(e.target.value)}
						IconComponent={ExpandMore}
						MenuProps={{
							PaperProps: {
								style: {
									maxWidth: 300,
								},
							},
						}}
					>
						<MenuItem value={'all'} sx={{ fontWeight: 'bold' }}>
							All
						</MenuItem>
						<MenuItem
							value={'WM 1100C6 6 SHIFT MODEL ONLY'}
							sx={{ fontWeight: 'bold' }}
						>
							WM 1100C6 6 SHIFT MODEL...
						</MenuItem>
						<MenuItem
							value={'WM 1100A6, C6 AND WM 1100C, WM 500 AND WM 990 WEEDER'}
							sx={{ fontWeight: 'bold' }}
						>
							WM 1100A6, C6 AND WM 1100C...
						</MenuItem>
					</StyledSelect>
				</Box>
				<Box sx={classes.accessoriesGrid}>
					{accessories.map((a, i) => (
						<AccessoryCard key={i} title={a.name} description={a.use} image={a.image} />
					))}
				</Box>
			</Box>
		</Box>
	)
}

export const Rating = ({ rating }) => {
	const classes = {
		root: {
			'& svg': {
				color: colors.yellow[700],
			},
		},
	}

	return (
		<Box sx={classes.root}>
			{[1, 2, 3, 4, 5].map((i) => {
				return i <= rating ? <Star key={i} /> : <StarBorder key={i} />
			})}
		</Box>
	)
}

export const ProductsGrid = () => {
	const theme = useTheme()
	const classes = useStyles(theme)

	let [openDialog, setOpenDialog] = useState(false)
	let [productData, setProductData] = useState({})
	const [mainImg, setMainImg] = useState('')

	const handleDialogClose = () => {
		setProductData({})
		setMainImg('')
		setOpenDialog(false)
	}

	let [filter, setFilter] = useState('all')
	const triggerRef = useRef()

	useLayoutEffect(() => {
		document.querySelectorAll('.productFlash').forEach((el) => {
			fadeOpacity({ direction: 'bottom', duration: 1500 }).observe(el)
		})

		fade({ duration: 1000, direction: 'right' }).observe(
			document.querySelector('.productSelect')
		)
	}, [])

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.config({ units: { width: '%' } })

		if (triggerRef?.current) {
			gsap.fromTo(
				'.__line',
				{
					width: 0,
					ease: 'circ',
					duration: 2.5,
					scrollTrigger: {
						trigger: triggerRef?.current,
					},
				},
				{
					width: 100,
					ease: 'circ',
					duration: 2.5,
					scrollTrigger: {
						trigger: triggerRef?.current,
					},
				}
			)
		}
	}, [triggerRef])

	return (
		<>
			<Box sx={classes.productsGridRoot} id='products'>
				<Box sx={classes.productsGridContent}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							[theme.breakpoints.down('sm')]: {
								flexDirection: 'column',
							},
						}}
					>
						<Typography variant='h4' ref={triggerRef}>
							All Products
						</Typography>
						<Box
							sx={{
								height: 2,
								width: '100%',
								position: 'relative',
								mx: 5,
								[theme.breakpoints.down('sm')]: {
									display: 'none',
								},
							}}
						>
							<Box
								className='__line'
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: 0,
									height: '100%',
									backgroundColor: colors.grey[300],
								}}
							/>
						</Box>
						<StyledSelect1
							className='productSelect'
							sx={{
								[theme.breakpoints.down('sm')]: {
									fontSize: 16,
									px: 1,
									mt: 2.5,
								},
							}}
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
							IconComponent={ExpandMore}
						>
							<MenuItem value={'all'} sx={{ fontWeight: 'bold' }}>
								All
							</MenuItem>
							<MenuItem value={'weeder'} sx={{ fontWeight: 'bold' }}>
								Power Weeders
							</MenuItem>
							<MenuItem value={'tiller'} sx={{ fontWeight: 'bold' }}>
								Power Tillers
							</MenuItem>
							<MenuItem value={'reaper'} sx={{ fontWeight: 'bold' }}>
								Reapers
							</MenuItem>
						</StyledSelect1>
					</Box>
					<Box sx={classes.productsGrid}>
						{products
							.filter((p) => (filter === 'all' ? p : p.type === filter))
							.map((product) => (
								<Box
									sx={{
										position: 'relative',

										'& img': {
											position: 'absolute',
											left: 0,
											bottom:
												product.id === 6 ||
												product.id === 9 ||
												product.id === 10 ||
												product.id === 13
													? -75
													: -150,
										},
									}}
								>
									<Box
										onClick={() => {
											setOpenDialog(true)
											setProductData(product)
										}}
										key={product.id}
										sx={classes.productCard}
										className='productFlash'
									>
										<Box component='section'>
											<Rating rating={5} />
											<Typography variant='h5'>{product.name}</Typography>
											<Typography paragraph>
												{product.description.engine}
											</Typography>
											{/* <Typography component='div'>Rs. 1500</Typography> */}
										</Box>
									</Box>
									<img
										src={`/assets/${product.image}`}
										width={'100%'}
										height={'auto'}
										alt=''
										loading='lazy'
									/>
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
								'& .img-a': {
									objectFit: 'cover',
									width: '100%',
									height: 'auto',
									borderRadius: 5,
								},
								'& .img-b': {
									position: 'absolute',
									bottom: -150,
									right: 0,
									width: '100%',
									height: 'auto',
								},
								[theme.breakpoints.down('sm')]: {
									height: 300,
									borderRadius: 2.5,
									'& .img-b': {
										bottom: -125,
									},
								},
							}}
						>
							{mainImg && mainImg !== `/assets/${productData.image}` ? (
								<img src={mainImg} alt='' className='img-a' />
							) : mainImg && mainImg === `/assets/${productData.image}` ? (
								<img src={mainImg} alt='' className='img-b' />
							) : (
								<img
									src={`/assets/${productData.image}`}
									alt=''
									className='img-b'
								/>
							)}
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
							{/* <Typography variant='h5'>Rs. 1500</Typography> */}
							<Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 3.5 }}>
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
										borderColor: colors.grey[600],
										color: colors.grey[600],
										mr: 1,
									},

									'& a': {
										textTransform: 'capitalize',
										fontSize: 18,
										borderRadius: 10,
										pl: 3,
										pr: 5,
										py: 1,
										fontWeight: 'bold',
										backgroundColor: colors.grey[800],
										color: 'whitesmoke',
										'&:hover': {
											backgroundColor: colors.grey[800],
										},
									},

									[theme.breakpoints.down('md')]: {
										'& button, a': {
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
									component='a'
									href={`https://wa.me/919962555666?text=product name: ${productData.name}`}
								>
									Enquire now
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
						{productData?.images &&
							[`/assets/${productData.image}`, ...productData.images].map(
								(img, i) => (
									<Box
										onClick={() => setMainImg(img)}
										key={i}
										sx={{
											height: 125,
											width: 125,
											backgroundColor: colors.grey[200],
											borderRadius: 2.5,
											overflow: 'hidden',

											'& img': {
												width: '100%',
												height: 'auto',
												objectFit: 'contain',
											},
										}}
									>
										<img src={img} alt='' />
									</Box>
								)
							)}
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
	accessoriesGridRoot: {
		backgroundColor: colors.grey[100],
		py: 7.5,
		px: 5,
		[theme.breakpoints.down('md')]: {
			px: 0,
		},
	},
	accessoriesGridContent: {
		maxWidth: 1600,
		mx: 'auto',
		px: 5,
		pt: 7.5,
		pb: 10,
		borderRadius: 5,

		'& h4': {
			fontWeight: 'bold',
		},
		backgroundColor: 'white',
		[theme.breakpoints.down('sm')]: {
			pt: 7.5,
			pb: 10,
			mx: 0,
			px: 0,
			borderRadius: 0,

			'& h4': {
				fontSize: 27,
			},
		},
	},
	accessoriesGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
		gridAutoRows: '250px',
		gap: 5,
		mt: 7.5,

		'& section': {
			display: 'flex',
			alignItems: 'center',
			gap: 3.5,
		},

		[theme.breakpoints.down('sm')]: {
			gap: 2.5,
			gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
			gridAutoRows: '250px',
			mt: 3.5,
			px: 3.5,
			'& section': {
				gap: 0,
				alignItems: 'flex-start',
				flexDirection: 'column',
			},
		},
	},
	productsGridRoot: {
		backgroundColor: colors.grey[100],
		px: 5,
		[theme.breakpoints.down('md')]: {
			px: 0,
		},
	},
	productsGridContent: {
		maxWidth: 1600,
		mx: 'auto',
		backgroundColor: 'white',
		pt: 7.5,
		pb: 22.5,
		px: 5,
		borderRadius: 5,

		'& h4': {
			fontWeight: 'bold',
			whiteSpace: 'nowrap',
		},
		[theme.breakpoints.down('md')]: {
			'& h4': {
				fontSize: 27,
			},
			pb: 18,
			px: 0,
			borderRadius: 0,
		},
	},
	productsGrid: {
		px: 5,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 375px))',
		gridAutoRows: '425px',
		justifyContent: 'center',
		columnGap: 8,
		rowGap: 25,
		mt: 7.5,
		[theme.breakpoints.down('sm')]: {
			placeContent: 'center',
			gridAutoRows: '375px',
			rowGap: 20,
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			gridAutoRows: '375px',
			rowGap: 20,
		},
	},
	productCard: {
		backgroundColor: colors.grey[200],
		borderRadius: 5,
		p: 5,
		position: 'relative',
		cursor: 'pointer',
		height: '100%',

		overflow: 'hidden',

		'&:after': {
			content: "''",
			position: 'absolute',
			bottom: '-50%',
			left: '-50%',
			width: 0,
			height: '250%',
			backgroundColor: 'rgba(255,255,255,.75)',
			transition: 'none',
			transform: 'rotate(45deg)',
		},
		'&:hover:after': {
			backgroundColor: 'rgba(255,255,255,0)',
			width: '250%',
			transition: 'all .75s ease-in-out',
		},
		'& section': {
			'& h5': {
				fontWeight: 'bold',
				fontSize: 27,
				mt: 2,
			},
			'& p': {
				fontWeight: 300,
				fontSize: 20,
				color: colors.grey[600],
				mt: 1,
				mb: 2.5,
			},
			'& div': {
				fontSize: 24,
				fontWeight: 'bold',
			},
		},

		[theme.breakpoints.down('sm')]: {
			p: '2.5rem !important',
			'& h5': {
				fontSize: '1.35rem !important',
			},
			'& p': {
				fontSize: '1.15rem !important',
			},
			'& div': {
				fontSize: '1.25rem !important',
			},
		},
		// [theme.breakpoints.between("sm", "lg")]: {
		// 	"& img": {
		// 		width: 450,
		// 		left: 200,
		// 		bottom: -125,
		// 	},
		// },
	},
})
