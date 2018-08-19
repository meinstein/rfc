import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Header = ({ style, children }) => (
	<div style={{ ...style, ...styles }}>{children}</div>
)

Header.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node
}

export default Header
