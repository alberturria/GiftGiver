import React, { Component } from 'react';
import GiftEntity from '../entities/GiftEntity';
import { Form, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';

export default class Gift extends Component {
    constructor() {
        super();
        this.state = { gift: new GiftEntity(null, '', '') }
    }

    _handleChangePerson = (event) => {
        const { gift } = this.state;
        gift.person = event.target.value;

        this.setState({ gift });
    }

    render() {
        return (
        <div>
            <Form>
                <FormGroup>
                    <FormLabel>Person</FormLabel>
                    <FormControl
                    className='input-person'
                    onChange={this._handleChangePerson}
                    />
                </FormGroup>
            </Form>
        </div>
            );
    }

}