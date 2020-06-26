import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../../pages/AboutPage';


test('Should render AboutPage correctly', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper).toMatchSnapshot();
});