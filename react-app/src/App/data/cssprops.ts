


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



export const defaultContainerStyles: CssProps = {
	height: "1080px",
	width: "1080px",
	padding: "0px",
	margin: "0px auto",

	fontFamily: "inherit",
	fontSize: "14px",
	fontWeight: "400",
	lineHeight: "inherit",
	textAlign: "left" as const,

	color: "rgb(244 244 244)",
	backgroundColor: "#18181b",

	borderColor: "transparent",
	borderStyle: "solid",
	borderWidth: "0px",

	outlineColor: "transparent",
	outlineStyle: "solid",
	outlineWidth: "0px",

	position: "static" as const,
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto",
	zIndex: 0
};



export const defaultNodeStyles: CssProps = {
	height: "auto",
	width: "auto",
	padding: "0px",
	margin: "0px",

	fontFamily: "inherit",
	fontSize: "14px",
	fontWeight: "400",
	lineHeight: "inherit",
	textAlign: "inherit" as const,

	color: "inherit",
	backgroundColor: "transparent",

	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: "0px",

	outlineColor: "transparent",
	outlineStyle: "solid",
	outlineWidth: "0px",

	position: "static" as const,
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto",
	zIndex: 0
};
