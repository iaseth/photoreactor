import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { Footer, Header } from './components';
import React from 'react';
import { PictureDS, examplePicture } from './data/picture';
import Renderer from './components/Renderer/Renderer';


red.addIcons(rediconsJson.icons);

const DEFAULT_TEXT: string = JSON.stringify(examplePicture);

export default function App () {
	const [text, setText] = React.useState(DEFAULT_TEXT);
	const [picture, setPicture] = React.useState(examplePicture);
	const [showPicture, setShowPicture] = React.useState(false);

	React.useEffect(() => {
		try {
			const picture: PictureDS = JSON.parse(text);
			setPicture(picture);
		} catch (error) {
			console.log(`Error while parsing JSON for 'picture' !`);
		}
	}, [text]);

	const startRenderer = () => setShowPicture(true);
	const stopRenderer = () => setShowPicture(false);

	if (showPicture) {
		return <Renderer {...{picture, stopRenderer}} />;
	}

	return (
		<div className="bg-zinc-900 text-white">
			<Header />

			<main className="min-h-screen py-12">
				<section className="max-w-xl mx-auto px-4">
					<textarea className="textarea" value={text} onChange={e => setText(e.target.value)}></textarea>
				</section>

				<section className='grid grid-cols-2 gap-x-4'>
					<button className='button' onClick={startRenderer}>Render</button>
					<button className='button' onClick={() => setText(DEFAULT_TEXT)}>Reset</button>
				</section>
			</main>

			<Footer />
		</div>
	);
}
