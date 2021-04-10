import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);


it('should render the react root node', () => {
    expect(app).toMatchSnapshot();
})

it('Should initialize the `state` as am empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
})