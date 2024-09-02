import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { ExampleButton, Footer, Header } from './components';
import React from 'react';
import { PictureDS, examplePictures } from './data/picture';
import Renderer from './components/Renderer/Renderer';
import { indentedJson } from './utils';



red.addIcons(rediconsJson.icons);

const firstExamplePicture = examplePictures[0];
const DEFAULT_TEXT: string = indentedJson(firstExamplePicture);

export default function App () {
	const [text, setText] = React.useState(DEFAULT_TEXT);
	const [picture, setPicture] = React.useState(firstExamplePicture);
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

	const indentInput = () => {
		try {
			const jo = JSON.parse(text);
			const jsonText = indentedJson(jo);
			setText(jsonText);
		} catch (error) {
			console.log(`Error happened while indenting!`);
		}
	};
	const resetInput = () => setText(DEFAULT_TEXT);

	return (
		<div className="bg-zinc-900 text-white">
			<Header />

			<main className="min-h-screen max-w-xl mx-auto px-4 pt-0 py-12 space-y-6">
				<section className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{examplePictures.map((example, k) => <ExampleButton text={example.title}
						onClick={() => setText(indentedJson(example))} />)}
				</section>

				<section className="rounded-lg overflow-hidden">
					<textarea id="inputTextArea" className="textarea" rows={16} spellCheck={false} value={text} onChange={e => setText(e.target.value)}></textarea>
				</section>

				<section className='grid grid-cols-2 gap-4'>
					<button id="renderButton" className='button' onClick={startRenderer}>Render</button>
					<button id="indentButton" className='button' onClick={indentInput}>Indent</button>
					<button id="resetButton" className='button' onClick={resetInput}>Reset</button>
				</section>
			</main>

			<Footer />
		</div>
	);
}
