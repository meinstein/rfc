import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'

import { defaultStyle, activeStyle } from './styles'

const Tab = ({ children, to }) => (
	<Route
		path={to}
		children={({ match }) => (
			<Link to={to} style={match && match.isExact ? activeStyle : defaultStyle}>
				{children}
			</Link>
		)}
	/>
)

Tab.propTypes = {
	children: PropTypes.string,
	to: PropTypes.string
}

export default Tab
