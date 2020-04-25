export default (name: string): string => {
    return `import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import ${name} from '../${name}';
//Helps Emotion serialise out the styles for the snapshot
expect.addSnapshotSerializer(serializer)

describe('${name}', () => {
    test('${name} renders', () => {
    const component = renderer.create(<${name} />);
    expect(component.toJSON()).toMatchSnapshot();
    });
});`;
} ;
