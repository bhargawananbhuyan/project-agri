import { LandingCarousel, LandingGrid } from '../components/landing/Landing'
import { AccessoriesGrid, ProductsGrid } from '../components/landing/Accessories'
import { WhyUsGrid } from '../components/landing/Additional'
import { useLayoutEffect } from 'react'

function Landing() {
	useLayoutEffect(() => {
		document.documentElement.scrollTop = 0
	}, [])

	return (
		<>
			{/* landing --> */}
			<LandingCarousel />
			<LandingGrid />

			{/* accessories --> */}
			<AccessoriesGrid />
			<WhyUsGrid />

			{/* products --> */}
			<ProductsGrid />
		</>
	)
}

export default Landing
