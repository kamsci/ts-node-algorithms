export function factorial(num: number): number {
	if (num === 0) { return 1; }
	if (num < 0) { return; }

	return num * factorial(num - 1);
}

export default factorial;