import { colors, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import useEmblaCarousel from 'embla-carousel-react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { fadeOpacity, hideAndShow } from '../../utils/animations'
import lottieFile from '../../utils/lottie.json'

export const LandingCarousel = () => {
	const theme = useTheme()
	const classes = useStyles(theme)

	const [scrollSnaps, setScrollSnaps] = useState([])
	const [selectedIndex, setSelectedIndex] = useState(0)

	const [ref, embla] = useEmblaCarousel({
		align: 'start',
	})

	const onSelect = useCallback(() => {
		if (!embla) return
		setSelectedIndex(embla.selectedScrollSnap())
	}, [embla, setSelectedIndex])

	const scrollTo = useCallback(
		(index) => {
			if (!embla) return
			embla.scrollTo(index)
		},
		[embla]
	)

	useEffect(() => {
		if (!embla) return
		setScrollSnaps(embla.scrollSnapList())
		embla.on('select', onSelect)
	}, [embla, onSelect, setScrollSnaps])

	return (
		<Box sx={classes.landingCarouselRoot} ref={ref}>
			<Box sx={classes.landingCarouselContent}>
				{Array.from(Array(3).keys()).map((i) => (
					<Box key={i} component='section'>
						<img src={`/assets/banner-${i + 1}.jpg`} alt='' />
					</Box>
				))}
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					mt: 2.5,
					'& div': {
						height: '.5rem',
						width: '3rem',
						cursor: 'pointer',
						[theme.breakpoints.down('md')]: {
							height: '.35rem',
						},
					},
				}}
			>
				{scrollSnaps?.map((_, i) => (
					<div
						key={i}
						style={{
							backgroundColor:
								i === selectedIndex ? colors.green[500] : colors.grey[300],
						}}
						onClick={() => scrollTo(i)}
					/>
				))}
			</Box>
		</Box>
	)
}

export const LandingGrid = () => {
	const theme = useTheme()
	const classes = useStyles(theme)

	useLayoutEffect(() => {
		document.querySelectorAll('.landingFadeLeft').forEach((el) => {
			fadeOpacity({ duration: 1250, direction: 'left' }).observe(el)
		})

		document.querySelectorAll('.landingFadeRight').forEach((el) => {
			fadeOpacity({ duration: 1500, direction: 'right' }).observe(el)
		})

		document.querySelectorAll('.landingFadeBottom').forEach((el) => {
			fadeOpacity({ duration: 1500, direction: 'bottom' }).observe(el)
		})

		hideAndShow({ duration: 1250 }).observe(document.querySelector('.landingHideBottom'))

		gsap.registerPlugin(ScrollTrigger)

		gsap.fromTo(
			'.scrollTriggerItem',
			{
				right: 45,
				ease: 'circ',
				scrollTrigger: {
					trigger: '.landingFadeRight',
					scrub: 0.35,
				},
			},
			{
				right: -7.5,
				ease: 'circ',
				scrollTrigger: {
					trigger: '.landingFadeRight',
					scrub: 0.35,
				},
			}
		)
	}, [])

	return (
		<Box sx={classes.landingGridRoot} id='about'>
			<Box sx={classes.landingGridContent}>
				<Box sx={{ ...classes.landingGridBox, p: 0 }} className='landingFadeBottom'>
					<Box
						sx={{
							position: 'relative',
							overflow: 'hidden',
							height: '100%',
							p: 8.5,
							'& img': {
								position: 'absolute',
								right: -60,
								bottom: -250,
								width: 625,
								height: 'auto',
								opacity: 0.5,
							},
							[theme.breakpoints.down('md')]: {
								'& img': {
									right: -50,
									bottom: -200,
									width: 450,
								},
								p: 4.5,
							},
						}}
					>
						<Box component='section' className='landingHideBottom'>
							<Typography component='div'>देश की शान किसान</Typography>
							<Typography component='div'>Kisaan hamare desh ki shaan hai</Typography>
						</Box>
						<img src='/assets/agri-21.png' alt='' loading='eager' />
					</Box>
					<img id='old-guy' src='/assets/agri-23.png' alt='' loading='eager' />
				</Box>

				<Box
					sx={{
						...classes.landingGridBox,
						'& div': {
							position: 'absolute',
							bottom: -50,
							right: -7.5,
							fontSize: 120,
							fontWeight: 'bold',
							opacity: 0.35,
							[theme.breakpoints.down('sm')]: {
								bottom: -55,
							},
						},
					}}
					className='landingFadeRight'
				>
					<Typography component='section'>
						<strong>20+</strong>
						<br /> <span>branches</span>
					</Typography>
					<div className='scrollTriggerItem'>20</div>
				</Box>

				<Box
					sx={{
						...classes.landingGridBox,
						'& div': {
							position: 'absolute',
							bottom: -50,
							right: -7.5,
							fontSize: 120,
							fontWeight: 'bold',
							opacity: 0.35,
							[theme.breakpoints.down('sm')]: {
								bottom: -55,
							},
						},
					}}
					className='landingFadeRight'
				>
					<Typography component='section'>
						<strong>500+</strong>
						<br /> <span>Dealers across India</span>
					</Typography>
					<div className='scrollTriggerItem'>500</div>
				</Box>
				<Box sx={classes.landingGridBox} className='landingFadeRight'>
					<Box component='section'>
						<img
							src='/assets/agri-22.png'
							alt=''
							width={'100%'}
							height='auto'
							loading='eager'
						/>
						<strong>Powerful, fuel efficient and reliable equipments.</strong>
						<div>
							George Maijo has an excellent dealer network across the country and keen
							to expand this network further.
						</div>
					</Box>
				</Box>
				<Box sx={classes.landingGridBox} className='landingFadeLeft'>
					<Typography component='section'>
						<strong>Cultivating ideas for growth</strong>
						<div>
							George Maijo Agri, started in 2013 is the agricultural wing of George
							Maijo Industries Pvt. Ltd. George Maijo Agri{' '}
							<span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
								lives by cultivating ideas for growth in the literal sense.
							</span>
						</div>
					</Typography>
				</Box>
				<Box sx={classes.landingGridBox} className='landingFadeRight'>
					<Typography component='section'>
						We believe in making the life of farmers simpler by providing more
						mechanized products.
					</Typography>
				</Box>
				<Box
					sx={{
						...classes.landingGridBox,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						p: 0,
					}}
					className='landingFadeBottom'
				>
					<Lottie animationData={lottieFile} loop={true} autoplay={true} size={'300px'} />
				</Box>
			</Box>
		</Box>
	)
}

const useStyles = (theme) => ({
	landingGridRoot: {
		backgroundColor: colors.grey[100],
		px: 5,
		[theme.breakpoints.down('md')]: {
			px: 0,
		},
	},
	landingGridContent: {
		maxWidth: 1600,
		mx: 'auto',
		pt: 15,
		// pb: 0,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
		gridAutoRows: '275px',
		gap: 3.5,
		placeContent: 'center',
		[theme.breakpoints.down('md')]: {
			pt: 5,
			px: 3.5,
			pb: 5,
		},
	},
	landingGridBox: {
		backgroundColor: 'whitesmoke',
		borderRadius: 5,
		p: 5,
		color: 'whitesmoke',
		position: 'relative',

		[theme.breakpoints.up('xl')]: {
			'&:nth-of-type(1)': {
				gridColumn: 'span 5 / auto',
				gridRow: '1',
			},
			'&:nth-of-type(4)': {
				gridColumn: 'span 2 / auto',
				gridRow: 'span 2 / auto',
			},
			'&:nth-of-type(5)': {
				gridColumn: 'span 2 / auto',
			},
			'&:nth-of-type(6)': {
				gridColumn: '5',
				gridRow: '2',
			},
		},

		[theme.breakpoints.between('lg', 'xl')]: {
			'&:nth-of-type(1)': {
				gridRow: '1',
				gridColumn: 'span 4 / auto',
			},
			'&:nth-of-type(4)': {
				gridRow: 'span 2 / auto',
				gridColumn: 'span 2 / auto',
			},
			'&:nth-of-type(5), &:nth-of-type(6), &:nth-of-type(7)': {
				gridColumn: 'span 2 / auto',
			},
		},

		[theme.breakpoints.between('md', 'lg')]: {
			'&:nth-of-type(1)': {
				gridRow: '1',
				gridColumn: 'span 3 / auto',
			},
			'&:nth-of-type(4)': {
				gridRow: 'span 2 / auto',
				gridColumn: 'span 2 / auto',
			},
			'&:nth-of-type(6)': {
				gridRow: '2',
				gridColumn: '3',
			},
		},
		[theme.breakpoints.down('md')]: {
			'&:nth-of-type(1)': {
				gridRow: 'span 2 / auto',

				'& section': {
					'& div': {
						fontSize: '32px !important',
					},
				},

				'& #old-guy': {
					width: '275px !important',
				},
			},
			'&:nth-of-type(4)': {
				gridRow: 'span 2 / auto',
				'& section': {
					'& strong': {
						fontSize: '27px !important',
					},
				},
			},
			'&:nth-of-type(5)': {
				gridRow: 'span 2 / auto',
			},
			'&:nth-of-type(6)': {
				'& section': {
					fontSize: '20px !important',
				},
			},
		},

		'&:nth-of-type(1)': {
			backgroundColor: '#303e4f',
			position: 'relative',
			'& #old-guy': {
				position: 'absolute',
				width: 420,
				height: 'auto',
				bottom: 0,
				right: 25,
			},
			'& section': {
				'& div': {
					fontSize: 42,
					fontWeight: 'bold',
				},
			},
		},
		'&:nth-of-type(2)': {
			background: 'linear-gradient(to right, #d53127, #d55827)',
			'& section strong': {
				fontSize: 48,
			},
			'& section span': {
				opacity: 0.65,
			},
		},
		'&:nth-of-type(3)': {
			backgroundColor: '#f34f4d',
			'& section strong': {
				fontSize: 48,
			},
			'& section span': {
				opacity: 0.65,
			},
		},
		'&:nth-of-type(4)': {
			backgroundColor: '#32c08b',
			position: 'relative',
			'& img': {
				position: 'absolute',
				bottom: 0,
				left: 0,
			},

			'& section': {
				'& strong': {
					fontSize: 32,
				},
				'& div': {
					mt: 2,
					fontSize: 21,
					lineHeight: 1.8,
					opacity: 0.75,
				},
			},
		},
		'&:nth-of-type(5)': {
			backgroundColor: '#015294',
			'& section': {
				'& strong': {
					fontSize: 28,
				},
				'& div': {
					mt: 1.25,
					fontSize: 20,
					lineHeight: 1.8,
					opacity: 0.5,
				},
			},
		},
		'&:nth-of-type(6)': {
			background: 'url("/assets/agri-24.png")',
			backgroundSize: 'cover',
			position: 'relative',
			zIndex: 0,
			'&::after': {
				content: '""',
				width: '100%',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				backgroundColor: '#353eb9',
				opacity: 0.75,
				borderRadius: 5,
				zIndex: -1,
			},
			'& section': {
				fontSize: 16.5,
				lineHeight: 1.8,
			},
		},
		'&:nth-of-type(7)': { backgroundColor: '#fea700' },

		'& section': {
			fontSize: 24,
		},
	},
	landingCarouselRoot: {
		overflow: 'hidden',
		backgroundColor: colors.grey[100],
		pb: 5,
		px: 5,
		[theme.breakpoints.down('md')]: {
			pb: 0,
			px: 3.5,
		},
	},
	landingCarouselContent: {
		display: 'flex',
		columnGap: 5,
		maxWidth: 1600,
		mx: 'auto',

		'& section': {
			width: '100%',
			height: '100%',
			flex: '0 0 100%',

			'& img': {
				borderRadius: 5,
				width: '100%',
				objectFit: 'cover',
			},
		},

		[theme.breakpoints.down('md')]: {
			maxWidth: '100vw',
			width: '100%',
			px: 0,
			pb: 0,
			mx: 0,
			mt: 5,
		},
	},
})
