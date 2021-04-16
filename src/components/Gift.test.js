import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift.js';
import GiftEntity from '../entities/GiftEntity.js';

describe('Gift', () => {
    const removeGiftMock = jest.fn();
    const sampleId = 0;
    const props = { gift: new GiftEntity(sampleId), removeGiftCallback: removeGiftMock };
    const gift = shallow(<Gift {...props}/>);

    it('Should\'ve rendered a Gift component', () =>{
        expect(gift).toMatchSnapshot();
    })

    it('Should initialize a person and present in the state', () =>{
        const expectedGift = new GiftEntity(sampleId, '', '');
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

    describe('When typing into the present input', () => {
        const samplePresent = 'Sample Present';
        
        beforeEach(() => {
            const inputPresent = gift.find('.input-present');
            inputPresent.simulate('change', { target: { value: samplePresent }});
        });

        it('Should\'ve updated the present in the state', () => {
            expect(gift.state().gift.present).toEqual(samplePresent);
        });
    });

    describe('When clicking the `Remove Gift`button', () => {
        beforeEach(() => {
            const deleteButton = gift.find('.delete-gift-button');
            deleteButton.simulate('click');
        })

        it('Should\'ve called the removeGift callback', () => {
            expect(removeGiftMock).toHaveBeenCalledWith(sampleId);
        })
    });


});