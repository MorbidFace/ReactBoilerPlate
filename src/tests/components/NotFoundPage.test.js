import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../features/notFound/NotFoundPage';

test('Should render Not Found Page', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
