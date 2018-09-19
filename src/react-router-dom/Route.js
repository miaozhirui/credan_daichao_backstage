import React, {Component} from 'react';
import {Consumer} from './context';
import pathToRegexp from 'path-to-regexp';

export default class Route extends Component {

    render() {

        return (
            <Consumer>
                {
                    value => {
                        let {location:{pathname}} = value;
                        let {path="/", component:Component, exact=false} = this.props//重命名是因为自定义组件是需要大写
                        let keys = [];
                        let regexp = pathToRegexp(path, keys, {end:exact});//把path路劲变成正则，然后和地址栏url进行匹配
                        // console.log(exact)
                        let result = pathname.match(regexp);


                        let props = {

                            location:value.location,
                            history:value.history,
                        }

                        if(result) {
                            
                            keys = keys.map(item => item.name);
                            // let params = {};

                            // keys.forEach((item, index) => {

                            //     params[item] = result[index +1]
                            // })
                            let params = keys.reduce((memo, name, index)=> {

                                 memo[name] = result[index+1];
                                 return memo;
                            }, {})

                            let match = {
                                url:pathname,
                                path:path,
                                params
                            }

                            props.match = match;
                            return <Component {...props}/>
                        } else {

                            return null;
                        }
                    }
                }
            </Consumer>
            )
    }
}