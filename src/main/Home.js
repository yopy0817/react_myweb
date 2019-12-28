import React from 'react';

class Home extends React.Component {

    render () {
        return (
            <div>
            <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 slide-list">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <a href="###">
                                    <img src="resources/img/slide1.jpg" alt="슬라이드1"/>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="##">
                                    <img src="resources/img/slide2.jpg" alt="슬라이드2"/>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="##">
                                    <img src="resources/img/slide3.jpg" alt="슬라이드3"/>
                                    </a>
                                </div>
                            </div>
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>강의<small>강의 준비중입니다</small></h2>
                    </div>
                </div>
                <div className="row">
                    <ul className="col-xs-12 prod-list">
                        <li className="col-sm-6">
                            <a href="##" className="prod-link">
                                <img src="resources/img/box1.jpg" alt="자바"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                        <li className="col-sm-6">
                            <a href="##" className="prod-link">
                                <img src="resources/img/box2.jpg" alt="jsp"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <a href="##" className="prod-link">
                                <img src="resources/img/img_ready.png" alt="준비중"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <a href="##" className="prod-link">
                                <img src="resources/img/img_ready.png" alt="준비중"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <a href="##" className="prod-link">
                                <img src="resources/img/img_ready.png" alt="준비중"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <a href="##" className="prod-link">
                                <img src="resources/img/img_ready.png" alt="준비중"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                        <li className="col-md-6 col-sm-12">
                            <a href="##" className="prod-link">
                                <img src="resources/img/img_ready.png" alt="준비중"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <a href="##" className="prod-link">
                                <img src="resources/img/img_ready.png" alt="준비중"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <a href="##" className="prod-link">
                                <img src="resources/img/img_ready.png" alt="준비중"/>
                                <span className="arrow"><i className="glyphicon glyphicon-menu-right"></i></span>
                                <span className="arrow hover">상세보기<i className="glyphicon glyphicon-menu-right"></i></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </div>
        )
    }
}


export default Home;