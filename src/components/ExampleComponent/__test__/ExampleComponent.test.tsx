import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import ExampleComponent from '../ExampleComponent';
//Helps Emotion serialise out the styles for the snapshot
expect.addSnapshotSerializer(serializer)

describe('ExampleComponent', () => {
    test('ExampleComponent renders', () => {
    const component = renderer.create(<ExampleComponent />);
    expect(component.toJSON()).toMatchSnapshot();
    });
});