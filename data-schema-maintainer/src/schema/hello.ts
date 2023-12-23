import { Min } from "class-validator";

export abstract class SomeDataDefine {

	/**
	 * The size of the shape.
	 *
	 * @minimum 0
	 * @TJS-type integer
	 */
	@Min(0)
	abstract size: number;

}
