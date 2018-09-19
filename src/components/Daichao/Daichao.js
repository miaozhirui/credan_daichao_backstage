import React, { Component } from 'react';
import {Link, Route } from '../../react-router-dom';
import addChannel from './addChannel';
import channelList from './channelList';


export default class Daichao extends Component {


    render() {

        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="nav nav-stacked">
                        <li><Link to="/daichao/addChannel">添加渠道</Link></li>
                        <li>
                            <Link to="/daichao/channelList">渠道列表</Link>
                        </li>
                    </div>
                </div>
                <div className="col-md-10">
                    <Route path="/daichao/addChannel" component={addChannel}></Route>
                    <Route path="/daichao/channelList" component={channelList}></Route>
                </div>
            </div>
            )
    }
}