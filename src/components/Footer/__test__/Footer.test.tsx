import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import Footer from '../Footer';
//Helps Emotion serialise out the styles for the snapshot
expect.addSnapshotSerializer(serializer)

describe('Footer', () => {
    test('Footer renders', () => {
    const component = renderer.create(<Footer />);
    expect(component.toJSON()).toMatchSnapshot();
    });
});