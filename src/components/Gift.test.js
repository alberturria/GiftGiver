import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift.js';
import GiftEntity from '../entities/GiftEntity.js';

describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('Should\'ve rendered a Gift component', () =>{
        expect(gift).toMatchSnapshot();
    })

    it('Should initialize a person and present in the state', () =>{
        const expectedGift = new GiftEntity(null, '', '');
        expect(gift.state().gift).toEqual(expectedGift);
    })

    describe('When typing into the person input', () => {
        const samplePerson = 'SamplePerson';
        beforeEach(() => {
            const inputPerson = gift.find('.input-person');
            inputPerson.simulate('change', { target: { value: samplePerson }});
        })

        it('Should update the person in the state', () => {
            expect(gift.state().gift.person).toEqual(samplePerson);

        });

    });
});