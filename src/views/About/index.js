import React from 'react'
import PropTypes from 'prop-types'

import { Header, Paragraph } from '../../components'

import styles from './styles'

const About = ({ style }) => (
	<div style={{ ...styles.container, ...style }}>
		<Header>About</Header>
		<Paragraph>
			Richard Friedman Catering has been serving the greater Los Angeles area
			since 1981. And after over 35 years, our commitment remains the same:
			cooking fresh, delicious, local food, creating high quality culinary
			experiences, and providing dependable, professional service. With
			expertise in commercial production catering and special events, and a
			loyal staff of hardworking, dedicated people, we aim to create an
			unforgettable and delicious experience, without skimping out on
			hospitality. We are proud of the quality of service we provide, and strive
			to uphold our reputation.
		</Paragraph>
	</div>
)

About.propTypes = {
	style: PropTypes.object
}

export default About
