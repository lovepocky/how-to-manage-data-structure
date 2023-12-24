import { Min } from "class-validator";

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
