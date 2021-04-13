import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import GiftEntity from '../entities/GiftEntity';

const app = shallow(<App />);

describe('App', () => {
    it('should render the react root node', () => {
        expect(app).toMatchSnapshot();
    })

    it('Should initialize the `state` as am empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe('When clicking add-gift button', () =>{

        beforeEach(() => {
            const addGiftButton = app.find('.button-add-gift');
            addGiftButton.simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: [] });
        });

        it('Should add a new Gift to the `state` when clicking on the `add gift` button', () => {
            const expectedGiftEntity = new GiftEntity(0);
           
            const stateGifts = app.state().gifts;
            
            expect(stateGifts).toEqual([expectedGiftEntity]);
        });

        it('Should add a new Gift to the gifts list when clickin on the add Gift Button', () => {
            const expectedNumberOfGifts = 1;

            const giftList = app.find('.gifts-list');
            const numberOfGifts = giftList.children.length;
            
            expect(numberOfGifts).toEqual(expectedNumberOfGifts);
        })
    })
})