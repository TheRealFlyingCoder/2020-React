interface ObjectMap<T> {
    [key: string]: T;
}
interface EnumMap<T> {
    [key: number]: T;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.png" {
    const content: string;
    export default content;
}