import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion'

import logo from './rfc-03.svg'

import styles from './styles'

class Home extends Component {
	static propTypes = {
		style: PropTypes.object
	}

	render() {
		const { style } = this.props

		return (
			<div style={{ ...styles.container, ...style }}>
				<Motion
					defaultStyle={{ scale: 0.95 }}
					style={{ scale: spring(1, presets.wobbly) }}
				>
					{({ scale }) => (
						<img
							alt="img"
							src={logo}
							style={{
								...styles.logo,
								transform: `scale(${scale})`
							}}
						/>
					)}
				</Motion>
			</div>
		)
	}
}

export default Home
