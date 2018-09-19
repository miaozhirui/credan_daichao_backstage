import React, {Component} from 'react';
import api from './api';

export default class UserAdd extends Component {

    handleSubmit=(event)=>{
        event.preventDefault();

        let username = this.username.value;
        let email = this.email.value;

        let user = {username, email};

        api.createUser(user);

        this.props.history.push('/user/list')
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">用户名</label>
                    <input ref={input=>this.username=input} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="control-label">邮箱</label>
                    <input ref={input=>this.email=input} type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
            )
    }
}