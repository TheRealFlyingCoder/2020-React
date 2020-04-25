export default (name: string): string => {
    return `import React from 'react';
import ${name} from '../${name}';

export default { title: '${name}'};

export const baseStory = (): React.ReactElement => <${name}/>;
`;
};