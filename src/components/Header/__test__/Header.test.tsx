import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import Header from '../Header';
//Helps Emotion serialise out the styles for the snapshot
expect.addSnapshotSerializer(serializer)

describe('Header', () => {
    test('Header renders', () => {
    const component = renderer.create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
    });
});