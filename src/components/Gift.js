import React, { Component } from 'react';
import GiftEntity from '../entities/GiftEntity';
import { Form, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';

export default class Gift extends Component {
    constructor(props) {
        super(props);
        this.state = { gift: new GiftEntity(props.gift.id, '', '') }
    }

    _handleChangePerson = (event) => {
        const { gift } = this.state;
        gift.person = event.target.value;

        this.setState({ gift });
    }

    _handleChangePresent = (event) => {
        const { gift } = this.state;
        gift.present = event.target.value;

        this.setState({ gift });
    }

    render() {
        return (
            <div className='gift'>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl
                            className='input-person'
                            onChange={this._handleChangePerson}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl
                            className='input-present'
                            onChange={this._handleChangePresent}
                        />
                    </FormGroup>
                </Form>
                <Button
                    className='delete-gift-button'
                    onClick={() => this.props.removeGiftCallback(this.props.gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        );
    }

}