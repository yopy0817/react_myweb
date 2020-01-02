import React from 'react';

import Header from '../header/Header';
import Footer from '../header/Footer';
import Home from './Home';
import Notice from '../notice/Notice';
import Course from '../course/Course';
import CourseDetail from '../course/CourseDetail';

import {HashRouter, Route, BrowserRouter} from 'react-router-dom'; //라우터

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Route path="/" exact={true} component={Home} />
                <Route path="/notice" exact={true} component={Notice}/>
                <Route path="/course" exact={true} component={Course}/>
                <Route path="/course/:id" exact={true} component={CourseDetail}/>
                <Footer/>              
            </BrowserRouter>
        )
    }
}

export default App;