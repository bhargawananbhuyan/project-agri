import { ScrollTrigger, Tween } from 'react-gsap'

const Fade = ({ children, trigger = '', direction = '', duration = 1 }) => {
	return (
		<ScrollTrigger start='-300px center' end='bottom center' trigger={trigger}>
			{direction === 'left' ? (
				<Tween
					from={{ opacity: '0', x: '-2.5rem' }}
					to={{ opacity: '1', x: '0rem' }}
					duration={duration}
				>
					{children}
				</Tween>
			) : direction === 'right' ? (
				<Tween
					from={{ opacity: '0', x: '2.5rem' }}
					to={{ opacity: '1', x: '0rem' }}
					duration={duration}
				>
					{children}
				</Tween>
			) : (
				<Tween
					from={{ opacity: '0', y: '2.5rem' }}
					to={{ opacity: '1', y: '0rem' }}
					duration={duration}
				>
					{children}
				</Tween>
			)}
		</ScrollTrigger>
	)
}

export default Fade
