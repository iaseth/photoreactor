import { defaultContainerStyles as defaults } from "../../data";
import { PictureDS } from "../../data/picture";
import PictureNode from "./PictureNode/PictureNode";



interface RendererProps {
	picture: PictureDS,
	stopRenderer: () => void
}

export default function Renderer ({
	picture, stopRenderer
}: RendererProps) {
	const style = {
		height: picture.height || defaults.height,
		width: picture.width || defaults.width,
		padding: picture.padding || defaults.padding,

		fontSize: picture.fontSize || defaults.fontSize,
		fontFamily: picture.fontFamily || defaults.fontFamily,
		fontWeight: picture.fontWeight || defaults.fontWeight,
		lineHeight: picture.lineHeight || defaults.lineHeight,
		textAlign: picture.textAlign || defaults.textAlign,

		color: picture.color || defaults.color,
		backgroundColor: picture.backgroundColor || defaults.backgroundColor,

		borderColor: picture.borderColor || defaults.borderColor,
		borderStyle: picture.borderStyle || defaults.borderStyle,
		borderWidth: picture.borderWidth || defaults.borderWidth
	};

	return (
		<main className="w-screen h-screen overflow-hidden flex">
			<section className="m-auto relative overflow-hidden" style={style} onClick={stopRenderer}>
				{picture.nodes.map((node, k) => <PictureNode key={k} node={node} />)}
			</section>
		</main>
	);
}
