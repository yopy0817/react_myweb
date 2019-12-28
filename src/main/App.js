import React from 'react';

import Header from '../header/Header';
import Footer from '../header/Footer';
import Home from './Home';
import Notice from '../notice/Notice';
import Course from '../course/Course';

import {HashRouter, Route, BrowserRouter} from 'react-router-dom'; //라우터

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Route path="/" exact={true} component={Home} />
                <Route path="/notice" exact={true} component={Notice}/>
                <Route path="/course" exact={true} component={Course}/>
                <Footer/>              
            </BrowserRouter>
        )
    }
}

export default App;