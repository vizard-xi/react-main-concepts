import React, { Component } from 'react';

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', textarea: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.target.type === 'text' ? this.setState({name: event.target.value}) : this.setState({textarea: event.target.value})
    };

    handleSubmit(event) {
        alert("Name: " + this.state.name + "\nMessage: " + this.state.textarea);
        this.setState({name: '', textarea: ''});
        event.preventDefault();
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <textarea value={this.state.textarea} onChange={this.handleChange} cols="30" rows="10"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Forms;
