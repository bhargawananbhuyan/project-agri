import { CssBaseline } from '@mui/material'
import { Footer, Header } from './components/landing/Additional'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

function App() {
	return (
		<BrowserRouter>
			<>
				<CssBaseline />
				<div className='app'>
					<Header />

					<Routes />

					<Footer />
				</div>
			</>
		</BrowserRouter>
	)
}

export default App
