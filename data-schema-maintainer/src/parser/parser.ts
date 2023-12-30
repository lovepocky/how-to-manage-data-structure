import { plainToInstance } from "class-transformer";
import { SomeDataV1Fields, SomeDataV1Fields1, SomeDataV2Fields } from "../schema/hello";

export function parse(data: any) {

	const v = data['version']

	let clz
	switch (v) {
		case '1':
			clz = SomeDataV1Fields
			break
		case '1.1':
			clz = SomeDataV1Fields1
			break
		case '2':
			clz = SomeDataV2Fields
			break
	}

	return plainToInstance(clz, data)
}