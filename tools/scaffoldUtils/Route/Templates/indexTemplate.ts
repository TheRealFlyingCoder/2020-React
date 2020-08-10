export default (name: string): string => {
    return `export { default } from './${name}';
`;
};