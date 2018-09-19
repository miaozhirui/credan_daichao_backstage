import React from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {HashRouter as Router, Route, Link, Switch, Redirect, Back} from './react-router-dom';
import Home from './components/Home';
import User from './components/User/User';
import Profile from './components/Profile'
import Protected from './components/Protected';
import Daichao from './components/Daichao/Daichao';
import 'bootstrap/dist/css/bootstrap.css';

let {Provider, Consumer} = React.createContext();
// console.log(Provider, Consumer)


ReactDOM.render(

    <Router>
        <div>
            <nav>
                <div className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="" className="navbar-brand">管理系统</a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">首页</Link></li>
                                {/*<li><Link to="/user">用户中心</Link></li>*/}
                                {/*<li><Link to="/profile">个人设置</Link></li>
                                <li><Back/></li>
                                */}
                               <li><Link to="/daichao">贷钞</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/user/:id" component={User}></Route>
                <Route path="/daichao" component={Daichao}></Route>
                <Protected path="/profile" component={Profile}></Protected>
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
)

