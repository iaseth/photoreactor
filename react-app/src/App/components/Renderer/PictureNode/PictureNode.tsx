import { PictureNodeDS } from "../../../data";



interface PictureNodeProps {
	node: PictureNodeDS
}

export default function PictureNode ({
	node
}: PictureNodeProps) {

	const style = {
		height: node.height,
		width: node.width,
		padding: node.padding,
		margin: node.margin,

		fontSize: node.fontSize,
		fontFamily: node.fontFamily,
		fontWeight: node.fontWeight,
		lineHeight: node.lineHeight,
		textAlign: node.textAlign,

		color: node.color,
		backgroundColor: node.backgroundColor,

		borderColor: node.borderColor,
		borderStyle: node.borderStyle,
		borderWidth: node.borderWidth,

		outlineColor: node.outlineColor,
		outlineStyle: node.outlineStyle,
		outlineWidth: node.outlineWidth,

		position: node.position,
		top: node.top,
		right: node.right,
		bottom: node.bottom,
		left: node.left,
		zIndex: node.zIndex,
	};

	return (
		<div className={node.className} style={style}>
			{node.text || ""}
			{node.children && node.children.map((ch, k) => <PictureNode key={k} node={ch} />)}
		</div>
	);
}
