import React from 'react'
import PropTypes from 'prop-types'

import { Route } from 'react-router-dom'
import { Motion, spring } from 'react-motion'

const FadingRoute = ({ component: Component, path, ...rest }) => (
	<Route
		{...rest}
		render={matchProps => (
			<Motion
				key={path}
				defaultStyle={{
					opacity: 0
				}}
				style={{
					opacity: spring(1)
				}}
			>
				{style => <Component style={style} {...matchProps} />}
			</Motion>
		)}
	/>
)

FadingRoute.propTypes = {
	component: PropTypes.func,
	path: PropTypes.string
}

export default FadingRoute
