import { plainToInstance } from "class-transformer"
import { SomeDataDefine } from "./hello"
import { validate } from "class-validator"

test('json to class', () => {

	const plain = { size: 1 }
	const data = plainToInstance(SomeDataDefine, plain)

	console.log(data)
})

test('invalid field value', async () => {

	const plain = { size: -1 }
	const data = plainToInstance(SomeDataDefine, plain)

	console.log(data)
	const errors = await validate(data)
	console.log(errors)
	expect(errors.length > 0)
})