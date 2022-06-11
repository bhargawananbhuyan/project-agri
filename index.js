const express = require('express')
require('dotenv').config()
const path = require('path')

const startApp = async () => {
	const app = express()
	const port = process.env.PORT || 5000

	if (process.env.NODE_ENV === 'production') {
		app.use(express.static(path.join(__dirname, 'client', 'build')))
		app.get('*', (_, res) => {
			res.sendFile(path.join(__dirname, 'client', 'build/index.html'))
		})
	}

	try {
		await new Promise((resolve) => app.listen(port, resolve))
		console.log(`listening to app on port ${port}`)
	} catch (error) {
		console.error(`error connecting to app ${error}`)
	}
}

startApp()
