import { Footer, Header } from "../../components";



export default function MainPage () {
	return (
		<div>
			<Header />

			<main className="min-h-screen px-4 py-12">
				<section className="text-center">
					<h1 className="H4">Photoreactor</h1>
					<h4>Created By Ankur Seth</h4>
				</section>
			</main>

			<Footer />
		</div>
	);
}
