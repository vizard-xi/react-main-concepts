import React, { Component } from 'react';

class ComponentsAndProps extends Component {
    render() {
        const comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
              name: 'Hello Kitty',
              avatarUrl: 'http://placekitten.com/g/64/64'
            }
        };

        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>
        };

        function formatDate(date) {
            return date.toLocaleDateString();
        };

        function Avatar(props) {
            return (
                <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
            );
        };

        function UserInfo(props) {
            return (
                <div className="UserInfo">
                        <Avatar user={props.user}/>
                        <div className="UserInfo-name">
                            {props.user.name}
                        </div>
                    </div>
            );
        };

        function Comment(props) {
            return (
                <div className="Comment">
                    <UserInfo user={props.author}/>
                    <div className="Comment-text">
                            {props.text}
                        </div>
                        <div className="Comment-date">
                            {formatDate(props.date)}
                        </div>
                </div>
            );
        };

        return (
            <div>
                <Welcome name="Kay"/>
                <Welcome name="Drake"/>
                <Welcome name="Jarad"/>

                <Comment date={comment.date} text={comment.text} author={comment.author}/>
            </div>
        );
    }
}

export default ComponentsAndProps;
