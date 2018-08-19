import React from 'react'
import PropTypes from 'prop-types'

import { Header, Paragraph } from '../../components'

import styles from './styles'

const Events = ({ style }) => (
	<div style={{ ...styles.container, ...style }}>
		<Header>Events</Header>
		<div style={styles.content}>
			<Paragraph>
				With expertise in catering commercial productions, we also cater any and
				all types of private parties, weddings, Bar & Bat Mitzvah’s, memorials,
				offices, etc.
			</Paragraph>

			<Paragraph>
				For inquiries about our rates and availability, please see bottom of
				page for contact details.
			</Paragraph>

			<Paragraph>
				Our kitchen is located at 1326 Pico Blvd. Santa Monica, CA 90405.
			</Paragraph>
		</div>
	</div>
)

Events.propTypes = {
	style: PropTypes.object
}

export default Events
