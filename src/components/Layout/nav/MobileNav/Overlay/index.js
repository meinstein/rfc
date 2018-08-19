import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Motion, spring } from 'react-motion'
import styles from './styles'

const closeIcon = require('./close.svg')

const Overlay = ({ toggleOverlay }) => (
	<Motion
		defaultStyle={{ opacity: 0 }}
		style={{ opacity: spring(1, { stiffness: 120, damping: 17 }) }}
	>
		{value => (
			<div style={{ ...styles.container, ...value }}>
				<img
					alt="img"
					src={closeIcon}
					onClick={toggleOverlay.bind(null, false)}
					style={styles.icon}
				/>
				<Link to="/about" onClick={toggleOverlay.bind(null, false)}>
					About
				</Link>
				<Link to="/events" onClick={toggleOverlay.bind(null, false)}>
					Events
				</Link>
				<Link to="/menu" onClick={toggleOverlay.bind(null, false)}>
					Menu
				</Link>
			</div>
		)}
	</Motion>
)

Overlay.propTypes = {
	toggleOverlay: PropTypes.func
}

export default Overlay
