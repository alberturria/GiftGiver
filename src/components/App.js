import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GiftEntity from '../entities/GiftEntity';

export default class App extends Component {
    constructor() {
        super();

        this.state = { gifts: [] }
    }

    addGift = () => {
        const { gifts } = this.state;
        const existingIds = gifts.map( gift =>  gift.id);
        const maxId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 0;
        const newGift = new GiftEntity(maxId)
        gifts.push(newGift);

        this.setState({ gifts });
    }

    _renderGifts = () => {
        const { gifts } = this.state;

        return gifts.map(gift => <div key={gift.id} />);
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