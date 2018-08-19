import React, { Component } from 'react'

import Overlay from './Overlay'
const menuIcon = require('./menu.svg')

class MobileNav extends Component {
	state = {
		showOverlay: false
	}

	constructor(...args) {
		super(...args)

		this.toggleOverlay = this.toggleOverlay.bind(this)
	}

	toggleOverlay(state) {
		this.setState({
			showOverlay: state
		})
	}

	render() {
		return (
			<div
				style={{
					display: 'flex'
				}}
			>
				<img
					alt="img"
					onClick={this.toggleOverlay.bind(null, true)}
					src={menuIcon}
					style={{
						width: 40,
						height: 40,
						marginRight: 24
					}}
				/>
				{this.state.showOverlay && (
					<Overlay toggleOverlay={this.toggleOverlay} />
				)}
			</div>
		)
	}
}

export default MobileNav
