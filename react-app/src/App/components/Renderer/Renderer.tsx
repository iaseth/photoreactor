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
		height: picture.height,
		width: picture.width,
		padding: picture.padding,

		fontSize: picture.fontSize,
		fontFamily: picture.fontFamily,
		fontWeight: picture.fontWeight,
		lineHeight: picture.lineHeight,
		textAlign: picture.textAlign,

		color: picture.color,
		backgroundColor: picture.backgroundColor,

		borderColor: picture.borderColor,
		borderStyle: picture.borderStyle,
		borderWidth: picture.borderWidth
	};

	return (
		<main className="w-screen h-screen overflow-hidden flex select-none">
			<section className={`m-auto relative overflow-hidden ${picture.className}`} style={style} onClick={stopRenderer}>
				{picture.children.map((node, k) => <PictureNode key={k} node={node} />)}
			</section>
		</main>
	);
}
