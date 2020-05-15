import React, { useState } from 'react';
//import { useStateValue } from 'StateProvider';
import styles from './ExampleComponent.styles';

interface ExampleComponentProps {
    title?: string
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ title = 'This is a fresh boi' }) => {

    //const [globaleState, setGlobalState] = useStateValue();
    const [showTitle, ] = useState<boolean>(true);
    
    return (
        <div css={styles}>
            {showTitle && (
                <p className="freshBoi">{title}</p>
            )}
        </div>
    );    
};

export default ExampleComponent;