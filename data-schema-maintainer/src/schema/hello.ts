import { Min } from "class-validator";

export interface ISomeData {

	version: string

}

export class SomeDataDefine {

	/**
	 * The size of the shape.
	 *
	 * @minimum 0
	 * @TJS-type integer
	 */
	@Min(0)
	size?: number

}

export class SomeDataV1Fields implements ISomeData {

	version: string = "1"

	/**
	 * The size of the shape.
	 *
	 * @minimum 0
	 * @TJS-type integer
	 */
	@Min(0)
	size?: number
}

export class SomeDataV1Fields1 extends SomeDataV1Fields {

	version: string = '1.1'

	length?: number

}

export class SomeDataV2Fields implements ISomeData {

	version: string = "2"

	/**
	 * The size of the shape.
	 *
	 * @minimum 0
	 * @TJS-type integer
	 */
	@Min(0)
	rename_size?: number
}
