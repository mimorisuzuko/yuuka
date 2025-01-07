import { type CSSInterpolation, serializeStyles } from "@emotion/serialize";
import React from "react";
import { compile, middleware, prefixer, serialize, stringify } from "stylis";

type Props = {
	[key: string]: unknown;
	css?: CSSInterpolation[] | CSSInterpolation;
	children?: React.ReactNode;
	className?: string;
};

const createProps = ({
	css,
	...props
}: Props): [props: Props, Style: React.ReactElement | null] => {
	if (css === undefined) {
		return [props, null];
	}

	const emotion = serializeStyles(Array.isArray(css) ? css : [css]);
	const yuukaId = `yuuka-${emotion.name}`;
	const serialized = serialize(
		compile(`.${yuukaId}{${emotion.styles}}`),
		middleware([prefixer, stringify])
	);

	if (props.className) {
		props.className = `${props.className} .${yuukaId}`;
	} else {
		props.className = `${yuukaId}`;
	}

	return [
		props,
		React.createElement(
			"style",
			{
				href: yuukaId,
				key: "yuuka",
				precedence: "medium"
			},
			serialized
		)
	];
};

export default createProps;
