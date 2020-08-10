export default (name: string): string => {
    return `import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './${name}.styles';

const ${name}: React.FC<RouteComponentProps> = () => {
    
    return (
        <main css={styles}>
        </main>
    );    
};

export default ${name};`;
};