import React from 'react';
import { shallow } from 'enzyme';
import DogDetails from '../components/DogDetails';

describe('DogDetails', () => {
    it('Should open an alert on the button', () => {
          const wrapper = shallow(<DogDetails />);
    
          expect(wrapper.find('.DogDetails')).toHaveLength(1);
    });
    it('Should open an alert on the button', () => {

        const button = <button />;
        const h1 = <h1/>;
        const image = <img />;

        const wrapper = shallow(<DogDetails />);
    
        expect(wrapper.find(button)).toHaveLength(1);
        expect(wrapper.find(h1)).toHaveLength(1);
        expect(wrapper.find(image)).toHaveLength(1);
    });
  });