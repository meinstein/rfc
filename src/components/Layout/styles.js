import { colors, dims } from '../../styles'

export default {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		minHeight: '100vh',
		fontFamily: 'Hind',
		width: '100%',
		backgroundColor: colors.white
	},
	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: dims.nav,
		fontSize: 14,
		width: '100%'
	},
	content: {
		display: 'flex',
		justifyContent: 'center',
		flexGrow: 1,
		width: '90%'
	}
}
