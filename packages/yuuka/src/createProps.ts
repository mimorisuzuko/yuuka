import { serializeStyles } from "@emotion/serialize";
import React from "react";
import { compile, middleware, prefixer, serialize, stringify } from "stylis";
import type { Props } from "./types";

const createProps = ({
	css,
	...props
}: Props): [props: Props, Style: React.ReactElement | null] => {
	if (css === undefined) {
		return [props, null];
	}

	const emotion = serializeStyles([css]);
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
				key: "yuuka-style",
				precedence: "medium"
			},
			serialized
		)
	];
};

export default createProps;
