import React from 'react';
import { shallow } from 'enzyme';

import HelpPage from '../../pages/HelpPage';


test('Should render HelpPage correctly', () => {
    const wrapper = shallow(<HelpPage />);
    expect(wrapper).toMatchSnapshot();
});