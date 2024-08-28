


interface HeaderProps {
	//
}

export default function Header ({}: HeaderProps) {
	return (
		<header className="bg-red-500 text-white px-2 py-5 text-center select-none space-y-1">
			<h4>
				<a href="https://photoreactor.redpapr.com/">Photoreactor</a>
			</h4>
			<h6>by Ankur Seth</h6>
		</header>
	);
}
