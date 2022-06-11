import Landing from './pages/Landing'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import { Routes as RoutesRoot, Route } from 'react-router-dom'
import About from './pages/About'

function Routes() {
	return (
		<RoutesRoot>
			<Route path='/' element={<Landing />} />
			<Route path='/shop' element={<Shop />} />
			<Route path='/checkout' element={<Checkout />} />
			<Route path='/about' element={<About />} />
		</RoutesRoot>
	)
}

export default Routes
