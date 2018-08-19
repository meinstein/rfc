import React from 'react'
import PropTypes from 'prop-types'

import Media from 'react-media'
import { StaggeredMotion, spring, presets } from 'react-motion'

import { Header, Paragraph } from '../../components'

import SampleMenu from './Menu'
import menusData from './menus'
import styles from './styles'

const Menu = ({ style }) => (
	<div style={{ ...styles.container, ...style }}>
		<Header>Menu</Header>
		<div style={styles.content}>
			<Paragraph>
				These are just a few of our clients favorite menus from the past. They
				are all interchangeable and reflect only a sample of our range and
				ability to cook all cuisines.
			</Paragraph>
			<StaggeredMotion
				defaultStyles={menusData.map(() => ({ scale: 0.95, opacity: 0 }))}
				styles={prevInterpolatedStyles =>
					prevInterpolatedStyles.map((nil, idx) => {
						return idx === 0
							? {
									scale: spring(1, presets.wobbly),
									opacity: spring(1)
							  }
							: {
									scale: spring(
										prevInterpolatedStyles[idx - 1].scale,
										presets.wobbly
									),
									opacity: spring(prevInterpolatedStyles[idx - 1].scale)
							  }
					})
				}
			>
				{interpolatingStyles => (
					<Media query="(max-width: 800px)">
						{matches => (
							<div style={styles.menus}>
								{interpolatingStyles.map(({ scale, opacity }, idx) => (
									<SampleMenu
										key={idx}
										style={{
											transform: `scale(${scale})`,
											opacity,
											width: matches ? '100%' : 'calc(50% - 52px)'
										}}
										name={menusData[idx].name}
										items={menusData[idx].items}
									/>
								))}
							</div>
						)}
					</Media>
				)}
			</StaggeredMotion>
		</div>
	</div>
)

Menu.propTypes = {
	style: PropTypes.object
}

export default Menu

// {/* <div key={i} style={{border: '1px solid', height: style.h}} />) */}
// {/* {menusData.map((menu, index) => (
//   <SampleMenu
//   key={index}
//   name={menu.name}
//   items={menu.items}
// />
// ))} */}
