import React, { Component } from 'react'
import {Consumer} from './context'
import pathToRegexp from 'path-to-regexp';

export default class Switch extends Component {

    render() {
        
        return (
            <Consumer>
                {
                    value => {

                        let {location:{pathname}} = value;

                        let children = this.props.children;

                        for(let i=0; i<children.length; i++) {

                            let child = children[i];

                            //path的默认值是/ exact默认值是false，非精切匹配
                            let {path='/', exact=false} = child.props;
                            let reg = pathToRegexp(path, [], {end:exact});

                            if(reg.test(pathname)) {

                                return child;
                            }
                        }

                        return null;
                    }
                }
            </Consumer>
            )
    }
}