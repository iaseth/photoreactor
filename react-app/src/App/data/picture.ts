import { CssProps } from ".";
import examplePictureScript from './examplePictureScript.json';



export interface PictureNodeDS extends CssProps {
	text?: string,
	className?: string,
	children?: PictureNodeDS[]
}

export interface PictureDS extends CssProps {
	title: string, // purpose?
	nodes: PictureNodeDS[]
}

export const examplePicture: PictureDS = examplePictureScript;
