import { PictureDS } from "../../data/picture";



interface RendererProps {
	picture: PictureDS,
	stopRenderer: () => void
}

export default function Renderer ({
	picture, stopRenderer
}: RendererProps) {
	return (
		<main onClick={stopRenderer}>
			<h1>{picture.title}</h1>
		</main>
	);
}
