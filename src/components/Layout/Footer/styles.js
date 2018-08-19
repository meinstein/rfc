import { fonts, dims, colors } from '../../../styles'

export default {
	container: {
		fontSize: 14,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: fonts.paragraph,
		color: colors.darkGrey,
		width: '100%',
		height: 1.5 * dims.nav,
		letterSpacing: '0.4px',
		flexWrap: 'wrap'
	},
	contact: {
		letterSpacing: '1px',
		display: 'flex',
		margin: '0 8px'
	},
	icon: {
		marginRight: 8,
		fontSize: 18
	}
}
