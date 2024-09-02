


interface ExampleButtonProps {
	text: string,
	onClick: () => void
}

export default function ExampleButton ({
	text, onClick
}: ExampleButtonProps) {
	return (
		<button className="px-3 py-5 bg-zinc-950 font-bold rounded border border-transparent outline-none hover:text-red-500 hover:border-red-500 focus:text-red-500 focus:border-red-500" onClick={onClick}>{text}</button>
	);
}
