import { colors, fonts } from '../../../styles'

export default {
	container: {
		fontFamily: fonts.header,
		display: 'flex',
		marginLeft: 24
	},
	letter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
		width: 20,
		height: 40,
		color: colors.white,
		backgroundColor: colors.black,
		borderRadius: 2,
		margin: '0 2px'
	}
}
