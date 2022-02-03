
import React, { Component } from 'react';


class IntroducingJsx extends Component {
    
    render() {

        const user = {
            firstName: "Kelvin",
            lastName: "Prince"
        };

        const element = <h1>Hello, {formatName(user)}</h1>;

        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        };

        function getGreeeting(user) {
            if (user) return element;
            return <h1>Hello Stranger</h1>;
        };

        return (
            <div>
                {getGreeeting(user)}
                {getGreeeting(null)}
            </div>
        );
    }
}

export default IntroducingJsx;