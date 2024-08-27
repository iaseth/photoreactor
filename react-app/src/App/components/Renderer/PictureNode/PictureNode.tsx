import { PictureNodeDS, defaultNodeStyles as defaults } from "../../../data";



interface PictureNodeProps {
	node: PictureNodeDS
}

export default function PictureNode ({
	node
}: PictureNodeProps) {

	const style = {
		height: node.height || defaults.height,
		width: node.width || defaults.width,
		padding: node.padding || defaults.padding,
		margin: node.margin || defaults.margin,

		fontSize: node.fontSize || defaults.fontSize,
		fontFamily: node.fontFamily || defaults.fontFamily,
		fontWeight: node.fontWeight || defaults.fontWeight,
		lineHeight: node.lineHeight || defaults.lineHeight,
		textAlign: node.textAlign || defaults.textAlign,

		color: node.color || defaults.color,
		backgroundColor: node.background || defaults.background,

		borderColor: node.borderColor || defaults.borderColor,
		borderStyle: node.borderStyle || defaults.borderStyle,
		borderWidth: node.borderWidth || defaults.borderWidth,

		outlineColor: node.outlineColor || defaults.outlineColor,
		outlineStyle: node.outlineStyle || defaults.outlineStyle,
		outlineWidth: node.outlineWidth || defaults.outlineWidth,

		position: node.position || defaults.position,
		top: node.top || defaults.top,
		right: node.right || defaults.right,
		bottom: node.bottom || defaults.bottom,
		left: node.left || defaults.left,
		zIndex: node.zIndex || defaults.zIndex,
	};

	return (
		<div style={style}>
			{node.text || ""}
			{node.children && node.children.map((ch, k) => <PictureNode key={k} node={ch} />)}
		</div>
	);
}
