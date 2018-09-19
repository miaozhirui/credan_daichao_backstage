import React, {Component} from 'react';
import { Provider } from './context';

//每当地址里面锚点发生改变的时候，都需要重新去匹配
export default class HashRouter extends Component {

    state = {
        
        location:{

            pathname:window.location.hash?window.location.hash.slice(1):"/"
        }
    }

    componentDidMount() {

        window.addEventListener('hashchange', () => {

            this.setState({

                location:{
                    ...this.state.location,
                    pathname:window.location.hash?window.location.hash.slice(1):"/"
                }
            })
        })
    }

    render() {

        let value = {
            location:this.state.location,
            history:{
                push(to){
                    
                    window.location.hash = to;
                },
                goBack() {

                    window.history.go(-1);
                }
            }
        }

        return (
                <Provider value={value}>
                    {this.props.children}
                </Provider>
            )
    }
}