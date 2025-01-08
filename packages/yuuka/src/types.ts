import type { CSSObject } from "@emotion/serialize";
import type React from "react";

export type CSS = CSSObject;

export type Props = {
	[key: string]: unknown;
	css?: CSS;
	children?: React.ReactNode;
	className?: string;
};

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace YuukaJSX {
	export type Element = React.JSX.Element;
	export type ElementType = React.JSX.ElementType;
	export type ElementClass = React.JSX.ElementClass;
	export type ElementAttributesProperty = React.JSX.ElementAttributesProperty;
	export type ElementChildrenAttribute = React.JSX.ElementChildrenAttribute;
	export type LibraryManagedAttributes<C, P> =
		React.JSX.LibraryManagedAttributes<C, P>;
	export type IntrinsicAttributes = React.JSX.IntrinsicAttributes;
	export type IntrinsicClassAttributes<T> =
		React.JSX.IntrinsicClassAttributes<T>;
	export type IntrinsicElements = {
		[K in keyof React.JSX.IntrinsicElements]: React.JSX.IntrinsicElements[K] & {
			css?: CSS;
		};
	};
}
