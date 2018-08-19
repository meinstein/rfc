import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Media from 'react-media'

import { DesktopNav, MobileNav } from './nav'
import Title from './Logo'
import Footer from './Footer'
import styles from './styles'

const Layout = ({ children }) => (
	<section style={styles.container}>
		<nav style={styles.nav}>
			<Link to="/">
				<Title />
			</Link>
			<Media query="(max-width: 599px)">
				{matches => {
					return matches ? <MobileNav /> : <DesktopNav />
				}}
			</Media>
		</nav>
		<div style={styles.content}>{children}</div>
		<Footer />
	</section>
)

Layout.propTypes = {
	children: PropTypes.node
}

export default Layout
