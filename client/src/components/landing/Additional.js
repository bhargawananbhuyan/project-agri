import {
	colors,
	Fab,
	Input,
	Typography,
	useTheme,
	IconButton,
	RadioGroup,
	Radio,
	FormControlLabel,
} from '@mui/material'
import { Box } from '@mui/system'
import { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fade, fadeOpacity } from '../../utils/animations'
import { Menu, Close, Send } from '@mui/icons-material'

export const WhyUsGrid = () => {
	const theme = useTheme()
	const classes = useStyles(theme)

	useLayoutEffect(() => {
		document.querySelectorAll('.whyUsFade').forEach((el, i) => {
			fade({
				duration: i === 0 ? 1000 : 1500,
				direction: 'bottom',
			}).observe(el)
		})
	}, [])

	return (
		<Box sx={classes.whyUsRoot} id='whyus'>
			<Box sx={classes.whyUsContent}>
				<Typography variant='h4'>Why us?</Typography>
				<Box sx={classes.whyUsGrid}>
					<Box
						className='whyUsFade'
						sx={{
							...classes.whyUsCard,
							'& img': {
								position: 'absolute',
								width: 500,
								height: 'auto',
								top: -225,
								right: -60,
								[theme.breakpoints.down('sm')]: {
									width: 275,
									right: -36,
									top: -125,
								},
								[theme.breakpoints.between('sm', 'md')]: {
									width: 450,
								},
							},
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								height: '100%',
								justifyContent: 'space-between',
							}}
						>
							<Box
								sx={{
									height: 100,
									width: 100,
									backgroundColor: colors.blue[800],
									borderRadius: '50%',
									[theme.breakpoints.down('md')]: {
										width: 75,
										height: 75,
									},
								}}
							/>
							<Box>
								<Typography variant='h5' sx={{ fontWeight: 'bold', mt: 2.5 }}>
									Mr. Niranjan Chaudhary
								</Typography>
								<Typography
									sx={{
										mt: 2,
										fontSize: '1rem',
										fontWeight: 'light',
										lineHeight: 1.75,
										color: colors.grey[800],
										[theme.breakpoints.down('md')]: {
											fontSize: '1.1rem',
										},
									}}
								>
									Proud to be part of George Maijo Sales and Service Network of
									Dealers for Power Tiller for the past 4 years. Customer
									orientation and support from the company is awesome and give
									great confidence to go aggressive in the market.
									<br />
									<br />
									<em>
										- M/S. Needs Auto World, Main Road, Bonaigarh, Sundergarh,
										Odisha
									</em>
								</Typography>
							</Box>
						</Box>
						<img src={'/assets/agri-04.png'} alt='' loading='lazy' />
					</Box>
					<Box
						className='whyUsFade'
						sx={{
							...classes.whyUsCard,
							'& img': {
								position: 'absolute',
								width: 500,
								height: 'auto',
								top: -225,
								right: 0,
								[theme.breakpoints.down('sm')]: {
									width: 275,
									right: -25,
									top: -135,
								},
								[theme.breakpoints.between('sm', 'md')]: {
									width: 450,
								},
							},
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								height: '100%',
								justifyContent: 'space-between',
							}}
						>
							<Box
								sx={{
									height: 100,
									width: 100,
									backgroundColor: colors.green[700],
									borderRadius: '50%',
									[theme.breakpoints.down('md')]: {
										width: 75,
										height: 75,
									},
								}}
							/>
							<Box>
								<Typography variant='h5' sx={{ fontWeight: 'bold', mt: 2.5 }}>
									Mr. Vijay Pawar
								</Typography>
								<Typography
									sx={{
										mt: 2,
										fontSize: '1rem',
										fontWeight: 'light',
										lineHeight: 1.75,
										color: colors.grey[800],
										[theme.breakpoints.down('md')]: {
											fontSize: '1.1rem',
										},
									}}
								>
									George Maijo has supported me in terms of Business improvement
									in all possible ways by providing sales , service & parts in
									time and ensured that my customer are always happy and
									satisfied. With their support I could able establish my business
									and have confidence to take my business to greater heights with
									all high quality Power Weeders and Power Tillers from George
									Maijo.
									<br />
									<br />
									<em>
										- M/S .Pawar Agro Traders, Gunawadi, Baramati, Maharashtra
									</em>
								</Typography>
							</Box>
						</Box>
						<img src={'/assets/agri-08.png'} alt='' loading='lazy' />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export const Footer = () => {
	const theme = useTheme()
	const classes = useStyles(theme)

	useLayoutEffect(() => {
		document.querySelectorAll('.footerFadeLeft').forEach((el) => {
			fadeOpacity({ duration: 1000, direction: 'right' }).observe(el)
		})

		fadeOpacity({ duration: 1000, direction: 'bottom' }).observe(
			document.querySelector('.contactFadeBottom')
		)
	}, [])

	const [bType, setBType] = useState('general')

	const [formData, setFormData] = useState(
		bType === 'general'
			? {
					firstName: '',
					lastName: '',
					email: '',
					contactNo: '',
					message: '',
			  }
			: {
					firstName: '',
					lastName: '',
					gstNo: '',
					contactNo: '',
					message: '',
			  }
	)

	const handleFormInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

	return (
		<>
			<Box sx={classes.contactFormRoot} id='contact'>
				<Box sx={classes.contactFormContent}>
					<Box component='section' sx={classes.footerLogo}>
						<img src={'/assets/logo-lg.png'} alt='' />
					</Box>

					<Box sx={classes.contactForm}>
						<Box
							sx={{
								height: 36,
								width: 225,
								overflow: 'hidden',
								position: 'relative',
								'& h4': {
									position: 'absolute',
								},
								[theme.breakpoints.down('md')]: {
									alignSelf: 'flex-start',
								},
							}}
						>
							<Typography variant='h4' className='contactFadeBottom'>
								Contact Form
							</Typography>
						</Box>
						<form
							onSubmit={(e) => {
								e.preventDefault()
								window.location.replace(
									`https://wa.me/+919962555666?text=${JSON.stringify(formData)}`
								)
							}}
						>
							<Box sx={{ gridColumn: 'span 2 / auto' }}>
								<RadioGroup
									defaultValue={bType}
									onChange={(e) => setBType(e.target.value)}
									sx={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										gap: 5,
										'& *': {
											color: '#efefef',
											fontSize: 20,
										},
										[theme.breakpoints.down('sm')]: {
											mt: -2,
											mb: 2,
										},
									}}
								>
									<FormControlLabel
										control={<Radio />}
										label={'General'}
										value={'general'}
									/>
									<FormControlLabel
										control={<Radio />}
										label={'Dealer'}
										value={'dealer'}
									/>
								</RadioGroup>
							</Box>
							<Input
								placeholder='Enter first name'
								fullWidth
								disableUnderline
								name='firstName'
								value={formData.firstName}
								onChange={handleFormInput}
							/>
							<Input
								placeholder='Enter last name'
								fullWidth
								disableUnderline
								name='lastName'
								value={formData.lastName}
								onChange={handleFormInput}
							/>
							{bType === 'general' ? (
								<Input
									placeholder='Enter email'
									fullWidth
									disableUnderline
									name='email'
									value={formData.email}
									onChange={handleFormInput}
								/>
							) : (
								<Input
									placeholder='Enter GST no.'
									fullWidth
									disableUnderline
									name='gstNo'
									value={formData.gstNo}
									onChange={handleFormInput}
								/>
							)}
							<Input
								placeholder='Enter contact no.'
								fullWidth
								disableUnderline
								name='contactNo'
								value={formData.contactNo}
								onChange={handleFormInput}
							/>
							<Box sx={{ gridColumn: 'span 2 / auto', position: 'relative' }}>
								<Input
									placeholder='Enter your message'
									fullWidth
									disableUnderline
									multiline
									minRows={4}
									maxRows={4}
									name='message'
									value={formData.message}
									onChange={handleFormInput}
								/>
								<Fab
									disableRipple
									type='submit'
									sx={{
										boxShadow: 'none',
										height: 60,
										width: 60,
										position: 'absolute',
										bottom: -24,
										right: 45,

										'& svg': {
											color: '#1b6e5f',
										},
									}}
								>
									<Send />
								</Fab>
							</Box>
						</form>
					</Box>
				</Box>
			</Box>
			<Box sx={classes.footerRoot}>
				<Box sx={classes.footerContent}>
					<Box
						component='section'
						gridColumn={'1'}
						className='footerFadeLeft'
						sx={{
							'& img': {
								width: 275,
								height: 'auto',
							},
						}}
					>
						<img src={'/assets/logo-lg.png'} alt='' />
					</Box>

					<Box gridColumn={'2'} className='footerFadeLeft'>
						<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
							Quick links
						</Typography>
						<Typography sx={{ display: 'flex', flexDirection: 'column' }}>
							<Link to='/'>Home</Link>
							<Link to='/#accessories'>Accessories</Link>
							<Link to='/#products'>Products</Link>
							<Link to='/#contact'>Contact</Link>
							<Link to='/shop'>Shop now</Link>
						</Typography>
					</Box>
					<Box className='footerAddress footerFadeLeft'>
						<Typography variant='h6' sx={{ fontWeight: 'bold', mb: 2 }}>
							Address
						</Typography>
						<Typography
							component='div'
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 1,
								fontWeight: 300,
								'& div': {
									marginTop: 1.5,
								},
							}}
						>
							<div>
								<strong>CHENNAI</strong>: M/s. George Maijo Industries Pvt Ltd,
								3/34, ELL KAY YES WAREHOUSE, GNT ROAD BOREX NAGAR, PERAVALLUR,
								CHINNAMPEDU POST PONNERI TIRUVALLUR TAMILNADU - 601206
							</div>
							<div>
								<strong>HARYANA</strong>: M/s. George Maijo Industries Pvt Ltd, LIMI
								Back side Madhuban complex, Sirsi Road,, Daha KARNAL HARYANA -
								132001
							</div>
							<div>
								<strong>ORISSA</strong>: M/s. George Maijo Industries Pvt Ltd,
								BAMPHAKUDA, PHUL NAKHARA, CUTTACK ODISHA - 754001
							</div>
						</Typography>
					</Box>
					<Box className='footerMap footerFadeLeft'>
						<iframe
							src='https://maps.google.com/maps?q=PERAVALLUR&t=&z=13&ie=UTF8&iwloc=&output=embed'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen=''
							loading='lazy'
						></iframe>
					</Box>
				</Box>
				<Typography
					sx={{
						fontSize: 18,
						fontWeight: 'bold',
						pb: 8,
						textAlign: 'center',
						'& span': { fontSize: 16 },
						'& a': { color: colors.blue[500] },
					}}
				>
					Developed by <a href='http://we3magic.com'>We3MagicLLP.</a>{' '}
					<span>All rights reserved, 2022</span>
				</Typography>
			</Box>
		</>
	)
}

export const Header = () => {
	const theme = useTheme()

	const [showNav, setShowNav] = useState(false)
	const classes = useStyles(theme, showNav)

	return (
		<Box component='header' sx={classes.headerRoot}>
			<Box sx={classes.headerContent}>
				<Typography id='header-logo'>
					<img src={'/assets/logo-sm.png'} width={60} height='auto' alt='' />
				</Typography>
				<IconButton className='menu-btn' onClick={() => setShowNav(!showNav)}>
					{showNav ? <Close /> : <Menu />}
				</IconButton>

				<Typography component='nav' className='dnav'>
					<Link to='/#'>Home</Link>
					<Link to='/about'>About us</Link>
					<a href='/#products'>Products</a>
					<a href='/#whyus'>Why Us?</a>
					<a href='/#contact'>Contact Us</a>
				</Typography>

				<Typography component='nav' className='mnav'>
					<Link to='/#' onClick={() => setShowNav(false)}>
						Home
					</Link>
					<Link to='/about' onClick={() => setShowNav(false)}>
						About us
					</Link>
					<a href='/#products' onClick={() => setShowNav(false)}>
						Products
					</a>
					<a href='/#whyus' onClick={() => setShowNav(false)}>
						Why Us?
					</a>
					<a href='/#contact' onClick={() => setShowNav(false)}>
						Contact Us
					</a>
					<Link to='/shop' onClick={() => setShowNav(false)}>
						Shop
					</Link>
				</Typography>
				<Link id='shop-route' to='/shop'>
					Shop
				</Link>
			</Box>
		</Box>
	)
}

const useStyles = (theme, showNav) => ({
	whyUsRoot: {
		backgroundColor: colors.grey[100],
		px: 5,
	},
	whyUsContent: {
		maxWidth: 1600,
		mx: 'auto',
		py: 7.5,

		'& h4': {
			fontWeight: 'bold',
		},
		[theme.breakpoints.down('md')]: {
			py: 2.5,
			'& h4': {
				fontSize: 27,
			},
		},
	},
	whyUsGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',
		gap: 3.5,
		mt: 12.5,
		[theme.breakpoints.down('sm')]: {
			placeContent: 'center',
			gap: 18.5,
		},
		[theme.breakpoints.between('sm', 'md')]: {
			placeContent: 'center',
			gap: 18.5,
		},
	},
	whyUsCard: {
		position: 'relative',
		backgroundColor: colors.grey[200],
		borderRadius: 5,
		p: 5,
		'&:nth-of-type(2)': {
			backgroundColor: '#d5e4e0',
		},
		[theme.breakpoints.down('md')]: {
			mx: 2.5,
			p: 4,
		},
	},
	contactFormRoot: {
		backgroundColor: colors.grey[100],
		px: 5,
		[theme.breakpoints.down('md')]: {
			px: 0,
		},
	},
	contactFormContent: {
		maxWidth: 1600,
		mx: 'auto',
		py: 10,
		[theme.breakpoints.down('md')]: {
			mx: 0,
			py: 7.5,
		},
	},
	contactForm: {
		mt: 7.5,
		height: 600,
		borderRadius: 5,
		background: 'linear-gradient(to right,#30aa7f,#1b6e5f)',
		p: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		'& h4': {
			fontWeight: 'bold',
			color: 'whitesmoke',
		},
		'& form': {
			display: 'grid',
			maxWidth: 600,
			width: '100%',
			gridTemplateColumns: 'repeat(2, 1fr)',
			gap: 3.5,
			'& input, & textarea': {
				backgroundColor: 'rgba(255,255,255,.12)',
				px: 3.5,
				py: 2,
				borderRadius: 1.5,
				fontSize: 20,
				fontWeight: 300,
				color: colors.grey[50],
			},
		},
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			p: 3.5,
			pb: 6.5,
			borderRadius: 0,
			'& h4': {
				fontSize: 27,
			},

			'& form': {
				display: 'flex',
				flexDirection: 'column',
				gap: 1.5,

				'& input, & textarea': {
					backgroundColor: 'rgba(255,255,255,.12)',
					px: 2.5,
					py: 1.5,
					borderRadius: 1.5,
					fontSize: 16.5,
					fontWeight: 300,
					color: colors.grey[50],
				},
			},
		},
	},
	footerLogo: {
		display: 'flex',
		justifyContent: 'flex-end',
		'& img': {
			width: 275,
			height: 'auto',
		},
		[theme.breakpoints.down('md')]: {
			mr: 5,
		},
	},
	footerRoot: {
		backgroundColor: colors.grey[100],
		px: 5,
		[theme.breakpoints.down('md')]: {
			px: 3.5,
		},
	},
	footerContent: {
		maxWidth: 1600,
		mx: 'auto',
		pt: 5,
		pb: 12.5,

		display: 'grid',
		gridAutoColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
		gap: 7.5,

		'& .footerAddress': {
			gridColumn: '3/5',
		},
		'& .footerMap': {
			gridColumn: '5',
		},

		[theme.breakpoints.down('md')]: {
			pt: 0,
			pb: 7.5,
			display: 'flex',
			flexDirection: 'column',

			'& h4': {
				fontSize: 24,
			},
			'& .footerAddress': {
				gridColumn: '3',
			},
		},

		'& a': {
			color: colors.grey[800],
			textDecoration: 'none',
			mt: 1.5,
			fontSize: '1rem',
		},
	},
	headerRoot: {
		backgroundColor: colors.grey[100],
		px: 5,
		[theme.breakpoints.down('md')]: {
			px: 0,
		},
	},
	headerContent: {
		maxWidth: 1600,
		mx: 'auto',
		py: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'.menu-btn': {
			display: 'none',
		},
		'& #header-logo': {
			'& img': {
				[theme.breakpoints.down('md')]: {
					width: 45,
				},
			},
		},
		'& #shop-route': {
			fontSize: '1.1rem',
			fontWeight: 'bold',
			px: 7.5,
			py: 1.5,
			borderRadius: 2,
			textDecoration: 'none',
			color: 'whitesmoke',
			backgroundColor: '#303e4f',
		},
		'& .dnav a': {
			fontSize: '1.1rem',
			mx: 3.5,
			fontWeight: 'bold',
			color: colors.grey[500],
			textDecoration: 'none',
		},
		'& .mnav': {
			left: '-100vw',
			display: 'none',
			transition: '.5s ease',
			'& a': {
				display: 'none',
			},
		},
		[theme.breakpoints.down('md')]: {
			p: 3.5,
			pb: 0,
			px: 4,
			'.menu-btn': {
				display: 'block',
				position: 'absolute',
				top: '1.8rem',
				right: '1.25rem',
				zIndex: 101,
				'& svg': {
					fontSize: 28,
				},
			},
			'& .dnav a, #shop-route': {
				display: 'none',
			},
			'& .mnav': {
				backgroundColor: 'whitesmoke',
				position: 'fixed',
				top: 0,
				left: showNav ? 0 : '-100vw',
				height: '100vh',
				width: '100vw',
				zIndex: 100,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 3.5,
				'& a': {
					display: 'block',
					fontSize: 24,
					textDecoration: 'none',
					color: colors.grey[900],
					fontWeight: 'bold',
				},
			},
		},
	},
})
