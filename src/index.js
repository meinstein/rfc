import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Root } from './views'
import './reset.css'

ReactDOM.render(
	<BrowserRouter>
		<Root />
	</BrowserRouter>,
	document.getElementById('root')
)
