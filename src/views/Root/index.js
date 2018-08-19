// external deps
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
// internal deps
import { Layout } from '../../components'
// interal imports
import FadingRoute from './FadingRoute'
import { Home, About, Events, Menu } from '..'
import './styles.css'

const Root = () => {
	return (
		<Layout>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexGrow: 1,
					maxWidth: 996,
					width: '100%'
				}}
			>
				<Switch>
					<FadingRoute exact path="/" component={Home} />
					<FadingRoute exact path="/about" component={About} />
					<FadingRoute exact path="/events" component={Events} />
					<FadingRoute exact path="/menu" component={Menu} />
					<Redirect to="/" />
				</Switch>
			</div>
		</Layout>
	)
}

export default Root
