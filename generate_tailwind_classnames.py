


PREFIXES = ["bg", "text", "border"]

COLORS = [
	"slate", "gray", "zinc", "neutral", "stone",
	"red", "orange", "amber", "yellow",
	"lime", "green", "emerald", "teal", "cyan",
	"sky", "blue", "indigo", "violet", "purple",
	"fichsia", "pink", "rose"
]

SHADES = [
	50, 100, 150, 200, 250,
	300, 350, 400, 450, 500,
	550, 600, 650, 700, 750,
	800, 850, 900, 950
]

def main():
	tailwind_classnames = []
	for color in COLORS:
		for prefix in PREFIXES:
			for shade in SHADES:
				classnames = f"{prefix}-{color}-{shade}"
				tailwind_classnames.append(classnames)

	javascript = f"const classNames = {str(tailwind_classnames)};"
	output_js_path = "react-app/src/tailwind_classnames.ts"
	with open(output_js_path, "w") as f:
		f.write(javascript)
	print(f"Saved: {output_js_path} ({len(tailwind_classnames)} classnames)")


if __name__ == '__main__':
	main()
