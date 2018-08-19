import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Menu = ({ name, items, style }) => (
	<div style={{ ...styles.container, ...style }}>
		<div style={styles.name}>{name}</div>
		<ul style={styles.items}>
			{items.map((item, idx) => (
				<li key={idx} style={styles.description}>
					{item.description}
				</li>
			))}
		</ul>
	</div>
)

Menu.propTypes = {
	name: PropTypes.string,
	items: PropTypes.array,
	style: PropTypes.object
}

export default Menu
