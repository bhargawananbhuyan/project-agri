import { Box, Button, colors, Typography, useTheme } from '@mui/material'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { useLayoutEffect } from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'
import Fade from '../components/animations/Fade'

const About = () => {
	const theme = useTheme()
	gsap.registerPlugin(TextPlugin)

	useLayoutEffect(() => {
		document.documentElement.scrollTop = 0
	}, [])

	return (
		<Box
			sx={{
				backgroundColor: colors.grey[100],
			}}
		>
			<Box
				sx={{
					maxWidth: 1600,
					mx: 'auto',
					px: 5,
					pt: 8,
					[theme.breakpoints.down('lg')]: {
						px: 3.5,
					},
				}}
			>
				<Box
					sx={{
						position: 'relative',
					}}
				>
					<Fade>
						<Typography
							variant='h3'
							sx={{
								fontWeight: 'bold',
								textAlign: 'center',
								position: 'absolute',
								width: '100%',
								[theme.breakpoints.down('lg')]: {
									fontSize: '2rem',
								},
							}}
						>
							About us
						</Typography>
					</Fade>
					<Box
						sx={{
							position: 'absolute',
							display: 'grid',
							placeItems: 'center',
							width: '100%',
							zIndex: '0',
							top: '-4.95rem',
							'& img': {
								width: 425,
								height: 'auto',
								opacity: 0.5,
							},
							[theme.breakpoints.down('lg')]: {
								top: '-3.15rem',
								'& img': {
									width: 300,
								},
							},
						}}
					>
						<img src={'/assets/Agri Website_aboutus_PNGS-17 1.png'} alt='' />
					</Box>
				</Box>
				<Box
					sx={{
						backgroundColor: '#fff',
						pt: 10,
						borderRadius: 5,
						mt: 16,
						overflow: 'hidden',
						[theme.breakpoints.down('lg')]: {
							mt: 12,
							pt: 5,
						},
					}}
				>
					<Fade>
						<Typography
							variant='h4'
							sx={{
								color: '#347a22',
								px: 10,
								fontFamily: `'Titania', serif !important`,
								[theme.breakpoints.down('lg')]: {
									px: 5,
									fontSize: '1.75rem',
								},
							}}
						>
							Kisaan hamare desh ki shaan hai
						</Typography>
					</Fade>

					<Typography
						component='div'
						sx={{
							fontSize: '1.1rem',
							lineHeight: '2.5rem',
							mt: 5,
							mb: 8,
							px: 10,
							'& span, & u': {
								color: '#000',
								fontWeight: 'medium',
							},
							[theme.breakpoints.down('lg')]: {
								px: 5,
								mt: 2.5,
							},
						}}
					>
						<Fade duration={1.25}>
							<p>
								George Maijo lives by <span>cultivating ideas for growth</span> in
								the literal sense. Our goal is to serve the farming community in
								India,{' '}
								<span>by providing high quality products at subsidized rates</span>.
								George Maijo is in collaboration with WEIMA and AMEC for a wide
								range of light agriculture farming equipment such as power tillers,
								weeders, reapers, transplanters, sprayers, brush cutters and
								pumpsets.
							</p>
						</Fade>
						<Fade duration={1.5}>
							<p>
								There is constant innovation of product technology for various farm
								activities like soil preparation, seeding, transplanting,
								irrigation, plant protection, weeding & amp; harvesting operations.
								George Maijo brings affordable and appropriate mechanization to
								small and marginal farmerswho are facing labor shortage due to huge
								migration of labor from rural to urban areas.
							</p>
						</Fade>
						<Fade duration={1.75}>
							<p>
								We believe in improving the quality of life of farmers as well as
								overcoming labor shortages by providing more mechanized products.
								Our portfolio includes products for all major operations of
								cultivation such as land preparation, plantation, crop management,
								harvesting and post harvesting. Our product range is{' '}
								<span>powerful, fuel efficient and reliable</span>. George Maijo has
								a presence all over India with a{' '}
								<u>
									500+ dealer network, who provide effective after-sales service
								</u>{' '}
								and we are keen to expand this network further. George Maijo is an
								ISO 9001:2015 certified company.
							</p>
						</Fade>
					</Typography>
					<Fade duration={2}>
						<Button
							variant='contained'
							disableElevation
							sx={{
								textTransform: 'capitalize',
								px: 3.5,
								py: 1.5,
								mx: 10,
								fontSize: '1.1rem',
								fontWeight: 400,
								backgroundColor: '#ff8b00',
								zIndex: 1,
								'&:hover': {
									backgroundColor: '#ff8b00',
								},
								[theme.breakpoints.down('lg')]: {
									mx: 4.5,
								},
							}}
						>
							Get in touch
						</Button>
					</Fade>
					<Box sx={{ position: 'relative', pt: '16rem' }}>
						<Box
							component='img'
							src={'/assets/Agri Website_grass-151-15.png'}
							alt=''
							sx={{
								width: '100%',
								height: 'auto',
								position: 'absolute',
								bottom: 0,
								zIndex: 2,
								[theme.breakpoints.down('lg')]: {
									height: 150,
									objectFit: 'cover',
								},
							}}
						/>

						<ScrollTrigger
							start='-300px center'
							end='bottom center'
							scrub={0.75}
							toggleActions='none'
						>
							<Tween from={{ x: '-3.5rem' }} to={{ x: '0rem' }}>
								<Box
									component='img'
									src={'/assets/Agri Website_aboutus_PNGS-18.png'}
									alt=''
									sx={{
										width: 325,
										height: 'auto',
										position: 'absolute',
										bottom: '2.5rem',
										right: '7.5rem',
										zIndex: 1,
										[theme.breakpoints.down('lg')]: {
											width: 225,
											right: 0,
											bottom: '2rem',
										},
									}}
								/>
							</Tween>
						</ScrollTrigger>
						<Box
							component='img'
							src={'/assets/Agri Website_aboutus_PNGS-17.png'}
							alt=''
							sx={{
								width: 425,
								height: 'auto',
								position: 'absolute',
								bottom: '2.5rem',
								right: '5.5rem',
								zIndex: 0,
								opacity: 0.5,
								[theme.breakpoints.down('lg')]: {
									width: 250,
									right: '.5rem',
								},
							}}
						/>
					</Box>
				</Box>
				<Fade>
					<Box
						sx={{
							backgroundColor: '#006090',
							borderRadius: 5,
							my: 8,
							position: 'relative',
							overflow: 'hidden',
							'& img': {
								width: '60%',
								height: 'auto',
								opacity: 0.25,
								position: 'absolute',
								top: '-10rem',
								right: '-10rem',
								[theme.breakpoints.down('md')]: {
									width: '100%',
									right: 0,
									top: '2rem',
								},
							},
						}}
					>
						<Fade duration={1.5}>
							<Typography
								sx={{
									color: '#fff',
									fontSize: '2.75rem',
									p: 16,
									textAlign: 'center',
									[theme.breakpoints.down('md')]: {
										px: 5,
										py: 16,
										fontSize: '2rem',
									},
								}}
							>
								<span>Innovation</span> <span className='hastan'>through</span>{' '}
								<strong>MECHANIZATION</strong>
							</Typography>
						</Fade>
						<img src={'/assets/agri-21.png'} alt='' />
					</Box>
				</Fade>
				<Box sx={{ position: 'relative' }}>
					<Fade>
						<Box
							sx={{
								backgroundColor: '#d42e19',
								borderRadius: 5,
								position: 'relative',
								overflow: 'hidden',
							}}
						>
							<Box
								sx={{
									width: '100%',
									position: 'absolute',
									display: 'grid',
									placeItems: 'center',
									top: '-10rem',
									'& img': {
										width: '60%',
										height: 'auto',
										opacity: 0.35,
									},
									[theme.breakpoints.down('md')]: {
										top: '10rem',
										right: '-5rem',
										'& img': {
											width: '100%',
										},
									},
								}}
							>
								<img src={'/assets/agri-21.png'} alt='' />
							</Box>
							<Fade duration={1.5}>
								<Typography
									sx={{
										color: '#fff',
										fontSize: '2.5rem',
										py: 10,
										px: 14,
										maxWidth: 475,
										fontWeight: 'bold',
										'& span': {
											opacity: 0.5,
											fontWeight: 'bold',
										},
										[theme.breakpoints.down('lg')]: {
											px: 5,
											py: 12,
											fontSize: '1.75rem',
										},
									}}
								>
									<span>Powerful, fuel efficient</span> and reliable
								</Typography>
							</Fade>
						</Box>
					</Fade>
					<Fade>
						<Box
							sx={{
								backgroundColor: '#5b7b2b',
								borderRadius: 5,
								mt: 8,
								py: 10,
								position: 'relative',
								overflow: 'hidden',
								'& img:first-of-type': {
									width: '50%',
									height: 'auto',
									opacity: 0.25,
									position: 'absolute',
									bottom: '-5rem',
									left: '-18rem',
									[theme.breakpoints.down('md')]: {
										width: '100%',
										left: '5rem',
									},
								},
							}}
						>
							<img src={'/assets/agri-21.png'} alt='' />
							<Fade duration={1.5}>
								<Typography
									sx={{
										color: '#fff',
										fontSize: '2.75rem',
										px: 14,
										fontWeight: 'bold',
										[theme.breakpoints.down('lg')]: {
											px: 5,
											fontSize: '2.5rem',
										},
									}}
								>
									देश की शान किसान
								</Typography>
							</Fade>
							<Fade duration={1.75}>
								<Typography
									sx={{
										color: '#fff',
										fontSize: '2.5rem',
										px: 14,
										fontWeight: 300,
										[theme.breakpoints.down('lg')]: {
											px: 5,
											mt: 2.5,
											pb: 28,
											fontSize: '2rem',
										},
									}}
								>
									Kisaan humare <strong>desh ki shaan</strong> hai
								</Typography>
							</Fade>
						</Box>
					</Fade>
					<Box
						component='img'
						src={'/assets/Agri Website_aboutus_PNGS-15.png'}
						alt=''
						sx={{
							width: 815,
							height: 'auto',
							position: 'absolute',
							bottom: 0,
							right: 0,
							[theme.breakpoints.down('lg')]: {
								width: 300,
							},
						}}
					/>
				</Box>
				<Box>
					<ScrollTrigger>
						<Tween to={{ text: 'Our Team' }} duration={1.5}>
							<Typography variant='h4' sx={{ fontWeight: 'bold', my: 10 }} />
						</Tween>
					</ScrollTrigger>
					{[
						{
							name: 'Mr. Maijo Joseph',
							designation: 'Managing Director',
							image: 'm_joseph.jpeg',
							description: `Mr. Maijo Joseph has been involved with the business for 
							the last 30 years. Under his leadership the company moved to verticals like 
							agri- mechanization, marine automation, automobile retail and power transmission 
							businesses to name a few. Mr. Maijo is an entrepreneur, philanthropist and is also 
							a recipient of many awards from the business circles that he operates.
							Mr. Maijo is known for his lateral thinking which can be evidenced from the fact 
							that three new business verticals were started during the period 2014 – 2017. 
							He is also an active contributor to his alma mater at both Montfort School and 
							Loyala College.
							`,
						},
						{
							name: 'Mr. Joseph Maijo',
							designation: 'Director',
							image: 'j_maijo.jpeg',
							description: `Mr. Joseph Maijo-Director of George Maijo Industries Pvt Ltd graduated 
							with a Bachelors of Commerce Degree from Loyola College. He simultaneously pursued 
							a program in International Business from LIBA – Chennai, to hone his skill in 
							International Business and Financial Management. He is the key driver for conceptualizing 
							George Maijo Agri and driving its presence across India. His goal is ensure the George Maijo 
							footprint in every farming district in India and to simplify the lives of the farming 
							community by offering mechanised products for every step of their cultivation process.`,
						},
						{
							name: 'Mr. T.Ramesh',
							designation: 'Business Head',
							image: 't_ramesh.jpeg',
							description: `Having Education of Agricultural engineering Graduation with
							MBA (Marketing) Accomplished Professional having experience
							of over 32 years with leading organizations like Escorts
							Ltd, SAME GREAVES, Eicher Tractors & John Deere India across
							Sales & Marketing, Business Development, channel
							development, team Management & development and Training
							delivery. Leading the team with great focus on developing
							the dealers and company executives towards customer
							orientation and customer satisfaction to ensure sustained
							business growth.`,
						},
					].map((item, i) => (
						<Box
							key={i}
							sx={{
								display: 'flex',
								gap: 10,
								my: i === 1 ? 8 : 0,
								flexDirection: i === 1 ? 'row-reverse' : 'row',
								alignItems: 'center',
								[theme.breakpoints.down('lg')]: {
									flexDirection: 'column',
								},
							}}
						>
							<Fade>
								<Box
									component='img'
									src={`/assets/${item.image}`}
									sx={{
										width: 250,
										height: 300,
										backgroundColor: colors.grey[300],
										borderRadius: 5,
										flexShrink: 0,
										objectFit: 'cover',
										[theme.breakpoints.down('sm')]: {
											height: 350,
											width: '100%',
										},
									}}
								/>
							</Fade>
							<Box
								sx={{
									textAlign: i === 1 ? 'right' : 'left',
									[theme.breakpoints.down('lg')]: {
										textAlign: 'left',
									},
								}}
							>
								<Fade duration={1.25}>
									<Typography variant='h5' sx={{ fontWeight: 'bold' }}>
										{item.name}
									</Typography>
								</Fade>
								<Fade duration={1.5}>
									<Typography sx={{ color: '#9198a6', my: 1.5 }}>
										- {item.designation}
									</Typography>
								</Fade>
								<Fade duration={1.75}>
									<Typography
										sx={{
											fontWeight: 300,
											fontSize: '1.1rem',
											lineHeight: '2rem',
											color: '#9198a6',
											maxWidth: 600,
										}}
									>
										{item.description}
									</Typography>
								</Fade>
							</Box>
						</Box>
					))}
				</Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'auto 600px',
						gap: 5,
						mt: 10,
						[theme.breakpoints.down('lg')]: {
							gridTemplateColumns: '1fr',
						},
					}}
				>
					<Box
						sx={{
							border: 2,
							borderColor: '#cdcdcd',
							borderRadius: 5,
							'& img': {
								width: '100%',
								height: 'auto',
							},
						}}
					>
						<Box
							sx={{
								p: 6.5,
								[theme.breakpoints.down('lg')]: {
									p: 5,
								},
							}}
						>
							<Fade>
								<Typography variant='h4' sx={{ fontWeight: 'bold' }}>
									Our Vision
								</Typography>
							</Fade>
							<Fade duration={1.25}>
								<Typography
									sx={{
										fontWeight: 300,
										fontSize: '1.1rem',
										lineHeight: '2rem',
										mt: 2.5,
									}}
								>
									Our vision is to be market leader in all our industry verticals
									by focusing on quality, honesty and excellence. Our vision is
									that our company which commenced in 1962 should have sustained
									growth in every vertical and it should impact the economy and
									society in a very positive way by creating landmarks and
									building values.
								</Typography>
							</Fade>
						</Box>
						<Fade duration={1.5}>
							<img src={'/assets/Agri Website_aboutus_PNGS-19.png'} alt='' />
						</Fade>
					</Box>
					<Box
						sx={{
							backgroundColor: '#fff5ee',
							borderRadius: 5,
							overflow: 'hidden',
							'& img': {
								width: '100%',
								height: 'auto',
							},
						}}
					>
						<Fade>
							<img src={'/assets/Agri Website_aboutus_PNGS-20.png'} alt='' />
						</Fade>
						<Box
							sx={{
								px: 6.5,
								pb: 6.5,
								pt: 2.5,
								[theme.breakpoints.down('lg')]: {
									p: 5,
								},
							}}
						>
							<Fade duration={1.25}>
								<Typography
									variant='h4'
									sx={{ fontFamily: `'Titania', serif !important` }}
								>
									Our Mission
								</Typography>
							</Fade>
							<Fade duration={1.5}>
								<Typography
									sx={{
										fontWeight: 300,
										fontSize: '1.1rem',
										lineHeight: '2rem',
										mt: 2.5,
									}}
								>
									Our mission is to create values in the lives of all our clients
									including the grass root workers like fishermen, farmers, our
									employees and all stakeholders.
								</Typography>
							</Fade>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default About
