import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('render correctly  the forgot password modal', () => {
    const passwordReset = renderer.create(<forgotPassword />).toJSON();
    expect(passwordReset).toMatchSnapshot();

});
