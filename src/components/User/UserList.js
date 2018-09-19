import React, {Component} from 'react';
import {Link} from '../../react-router-dom';
import api from './api';

export default class UserList extends Component {
    
    state = {
        users:[]
    }

    componentDidMount() {

        let users = api.getUsers();

        this.setState({

            users
        })
    }

    render() {

        return (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>用户名</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            this.state.users.map(user => (
                                
                                    <tr key={user.id}>
                                        <td>

                                            <Link to={`/user/detail/${user.id}`}>
                                                {user.id}
                                            </Link>
                                        </td>
                                        <td>{user.username}</td>
                                    </tr>
                                
                            ))
                       }
                    </tbody>
                </table>
            )
    }
}