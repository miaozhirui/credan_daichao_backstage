//受保护的组件
import React, {Component} from 'react';
import {Route, Redirect} from '../react-router-dom';

export default function ({component:Component, ...reset}) {

    return (
            <Route {...reset}  render={props => {
                
                return localStorage.getItem('logined') ? <Component {...props}/>:<Redirect to='/login'/>
            }}/>
        )
} 
