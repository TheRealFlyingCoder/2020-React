export default (name: string): string => {
    return `import React from 'react';
//import { useStateValue } from 'StateProvider';
import styles from './${name}.styles';

const ${name} = (): React.ReactElement => {

    //const [globaleState, setGlobalState] = useStateValue();
    //const [localState, setLocalState] = useState(null);
    
    return (
        <div css={styles}>
            <p className="freshBoi">This is a fresh boi</p>
        </div>
    );    
};

export default ${name};`;
};