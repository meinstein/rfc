import { fonts, colors } from '../../../styles'

export default {
	container: {
		padding: 16,
		margin: 10,
		backgroundColor: colors.green,
		boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
	},
	name: {
		fontFamily: fonts.header,
		paddingBottom: 8
	},
	items: {
		margin: 0,
		paddingLeft: 20
	},
	item: {
		display: 'flex',
		flexDirection: 'row'
	},
	description: {
		// marginLeft: 12,
		margin: 2,
		fontFamily: fonts.paragraph,
		color: colors.black
	},
	icon: {
		fill: 'white',
		opacity: 0.75
	}
}
