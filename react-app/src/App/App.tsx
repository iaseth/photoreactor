import './App.css';

import MainPage from './pages/MainPage/MainPage';

import { red } from 'redicons';
import rediconsJson from './redicons.json';


red.addIcons(rediconsJson.icons);

export default function App () {

	return (
		<div className="bg-zinc-900 text-white">
			<MainPage />
		</div>
	);
}
