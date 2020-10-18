import React from 'react'

import styles from './styles'

const Footer = () => (
	<footer style={styles.container}>
		<div style={styles.contact}>
			<i className="fa fa-envelope-open-o" style={styles.icon} />
			charlie@rfcatering.com
		</div>
		<div style={styles.contact}>
			<i className="fa fa-phone" style={styles.icon} />
			310.450.4377
		</div>
		<div style={styles.contact}>
			<i className="fa fa-mobile" style={styles.icon} />
			310.779.6557
		</div>
		<a href="https://www.instagram.com/r.f.catering/">
			<div style={styles.contact}>
				<i className="fa fa-instagram" style={styles.icon} />
				r.f.catering
			</div>
		</a>
	</footer>
)

export default Footer
