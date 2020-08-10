interface ObjectMap<T> {
	[key: string]: T;
}
interface EnumMap<T> {
	[key: number]: T;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.svg' {
	const value: string;
	export default value;
}

declare module '*.woff' {
	const content: string;
	export default content;
}

declare module '*.woff2' {
	const content: string;
	export default content;
}

declare module '*.eot' {
	const content: string;
	export default content;
}

declare module '*.ttf' {
	const content: string;
	export default content;
}