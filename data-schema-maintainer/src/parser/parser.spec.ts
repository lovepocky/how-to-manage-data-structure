import { parse } from "./parser"

test('1', () => {
	const d = {
		version: "1",
		size: 1,
	}
	console.log(parse(d));
})

test('2', () => {
	const d = {
		version: "2",
		size: 1,
	}
	console.log(parse(d));
})