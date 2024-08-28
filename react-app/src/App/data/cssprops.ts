


export interface CssProps {
	height?: string,
	width?: string,
	padding?: string,
	margin?: string,

	fontFamily?: string,
	fontSize?: string,
	fontWeight?: string,
	lineHeight?: string,
	textAlign?: "inherit" | "left" | "right" | "center" | "justify",

	color?: string,
	backgroundColor?: string,

	borderColor?: string,
	borderStyle?: string,
	borderWidth?: string,

	outlineColor?: string,
	outlineStyle?: string,
	outlineWidth?: string,

	position?: "static" | "absolute" | "fixed" | "relative" | "sticky",
	top?: string,
	right?: string,
	bottom?: string,
	left?: string,
	zIndex?: number
}
