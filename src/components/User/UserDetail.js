import React, {Component} from 'react';
import api from './api';

export default class UserDetail extends Component {

    state = {

        user:{}
    }

    componentDidMount() {

        let user = api.getUser(this.props.match.params.id);
       
        this.setState({user})
    }

    render() {
        
        let {user} = this.state;
          
        return (
                <div>
                    ID:{user.id}
                    用户名:{user.username}
                    邮箱: {user.email}
                </div>
            )
    }
}