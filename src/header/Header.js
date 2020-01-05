import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="container">
                        <div className="navbar">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link to={{pathname:"/"}} className="navbar-brand">
                                    <img width="30" src="http://localhost:3000/img/logo.svg" alt="Brand"/>
                                </Link>
                            </div>
    
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><Link to={{pathname:"/"}}>Main</Link></li>
                                    <li><Link to={{pathname:"/notice"}}>공지사항</Link></li>
                                    <li><Link to={{pathname:"/course"}}>Course</Link></li>
                                    {/*
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="##">Course</a>
                                        <ul className="dropdown-menu">
                                            <li><Link to={{pathname:"/course"}}>Java</Link></li>
                                            <li><a href="##">JavaScript</a></li>
                                            <li><a href="##">테스트</a></li>
                                        </ul>
                                    </li>
                                    */}
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="##">드롭다운
                                            <span className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            
                                            <li><a href="##"><span className="glyphicon glyphicon-user"></span>Join</a></li>
                                            <li><a href="##"><span className="glyphicon glyphicon-log-in"></span>Login</a></li>
                                            <li><a href="##"><span className="glyphicon glyphicon-user"></span>MyPage</a></li>
                                            <li><a href="##"><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
                                            
                                        </ul>
                                    </li>
                                </ul>
    
                                <form className="navbar-form navbar-right" action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                        <div className="input-group-btn">
                                            
                                            <button className="btn btn-primary" type="submit">
                                                    검색
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}


export default Header;