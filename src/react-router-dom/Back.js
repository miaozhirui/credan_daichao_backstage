import React, {Component} from 'react';
import {Consumer} from './context';

export default class Back extends Component {

    render() {

        return (
                <Consumer>
                    {
                        value=>{
                            
                            return <a onClick={()=>value.history.goBack()}>返回</a>
                        }
                    }
                </Consumer>
            )
    }
}