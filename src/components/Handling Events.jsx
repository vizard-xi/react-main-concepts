import { click } from '@testing-library/user-event/dist/click';
import React, { Component } from 'react';

class HandlingEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.onClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState((previousState) => (
            {
                isToggleOn: !previousState.isToggleOn
            }
        ));
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default HandlingEvents;
