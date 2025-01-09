import type React from "react";
import { css } from "../css";
import type { Props } from "../types";

const createProps = ({
	css: _css,
	...props
}: Props): [props: Props, Style: React.ReactElement | null] => {
	if (_css === undefined) {
		return [props, null];
	}

	const [className, Style] = css(_css);

	if (props.className) {
		props.className = `${props.className} .${className}`;
	} else {
		props.className = `${className}`;
	}

	return [props, Style];
};

export default createProps;
