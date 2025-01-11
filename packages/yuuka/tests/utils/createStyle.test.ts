import { createStyle } from "../../src/utils/createStyle";

describe("utils/createStyle", () => {
	test("pseudo classes (1)", () => {
		const [className, style] = createStyle({
			input: {
				":focus": {
					background: "red"
				}
			}
		});

		expect(style).toBe(`.${className} input:focus{background:red;}`);
	});

	test("pseudo classes (2)", () => {
		const [className, style] = createStyle({
			input: {
				background: "blue",
				":focus": {
					background: "red"
				}
			}
		});

		expect(style).toBe(
			`.${className} input{background:blue;}.${className} input:focus{background:red;}`
		);
	});
});
