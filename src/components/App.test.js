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
        const sampleId = 0;

        beforeEach(() => {
            const addGiftButton = app.find('.button-add-gift');
            addGiftButton.simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: [] });
        });

        it('Should add a new Gift to the `state` when clicking on the `add gift` button', () => {
            const expectedGiftEntity = new GiftEntity(sampleId + 1);
           
            const stateGifts = app.state().gifts;
            
            expect(stateGifts).toEqual([expectedGiftEntity]);
        });

        it('Should add a new Gift to the gifts list when clickin on the add Gift Button', () => {
            const expectedNumberOfGifts = 1;

            const giftList = app.find('.gifts-list');
            const numberOfGifts = giftList.children.length;
            
            expect(numberOfGifts).toEqual(expectedNumberOfGifts);
        });

        it('Should\'ve created a new Gift Component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(sampleId + 1);
            });

            it('Should\'ve removed the gift from the state', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
    });
})