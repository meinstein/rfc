import { fonts, dims, colors } from '../../../../../styles'

export const defaultStyle = {
	fontFamily: fonts.header,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: colors.black,
	width: 100,
	height: dims.nav
}

export const activeStyle = {
	...defaultStyle,
	textDecoration: 'underline'
}
