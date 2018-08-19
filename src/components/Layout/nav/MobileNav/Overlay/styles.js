import { fonts, colors } from '../../../../../styles'

export default {
	container: {
		fontFamily: fonts.header,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.black,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
		color: 'white',
		fontSize: 24,
		lineHeight: 1.8,
		zIndex: 2
	},
	icon: {
		position: 'absolute',
		top: 16,
		right: 24,
		width: 40,
		height: 40
	}
}
