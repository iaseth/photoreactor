import { CssProps } from ".";
import examplePictureScripts from './examplePictureScripts.json';



export interface PictureNodeDS extends CssProps {
	tagName?: string,
	text?: string,
	className?: string,
	children?: PictureNodeDS[]
}

export interface PictureDS extends CssProps {
	title: string, // purpose?
	className?: string,
	children: PictureNodeDS[]
}

export const examplePictures: PictureDS[] = examplePictureScripts.examples;
