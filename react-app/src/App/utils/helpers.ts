


export function indentedJson (jo: any): string {
	const jsonText = JSON.stringify(jo, null, "\t");
	return jsonText;
}
