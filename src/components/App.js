import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GiftEntity from '../entities/GiftEntity';
import { maxNumber } from '../utils';
import Gift from './Gift';
import './index.css';

export default class App extends Component {
    constructor() {
        super();

        this.state = { gifts: [] }
    }

    addGift = () => {
        const { gifts } = this.state;
        const existingIds = gifts.map( gift => gift.id);
        const maxId = maxNumber(existingIds);
        const newGift = new GiftEntity(maxId + 1)
        gifts.push(newGift);

        this.setState({ gifts });
    }

    _renderGifts = () => {
        const { gifts } = this.state;

        return gifts.map(gift => <Gift key={gift.id} gift={new GiftEntity(gift.id)} removeGiftCallback={this.removeGift} />);
    }

    removeGift = (giftId) => {
        const { gifts } = this.state;
        const newGifts = gifts.filter(gift => gift.id !== giftId);

        this.setState( {gifts: newGifts });
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className='gifts-list'>
                    {this._renderGifts()}
                </div>
                <Button className='button-add-gift' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}