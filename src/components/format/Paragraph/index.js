import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Paragraph = ({ style, children }) => (
	<div style={{ ...style, ...styles }}>{children}</div>
)

Paragraph.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node
}

export default Paragraph
