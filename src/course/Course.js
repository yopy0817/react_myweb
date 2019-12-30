import React from 'react';

import './Course.css';

class Course extends React.Component {

    render() {
        return (
            <section>
            <div className="container">
                <div className="row">
                    <div className="titlebox">
	                    	<p>강의목록</p>
	                    	<small>언어</small>                    
	                </div>
                    <div className="course col-xs-12 col-sm-6 col-md-4">
                        <img src="img/box2.jpg" alt="사진" />
                        <div className="course_inner">
                            <h3 className="course_title">제목</h3>
                            <p className="course_summary">
                                테스트중입니다.테스트중입니다.테스트중입니다.테스트중입니다
                            </p>
                        </div>
                    </div>
                    <div className="course col-xs-12 col-sm-6 col-md-4">
                        <img src="img/box1.jpg" alt="사진" />
                        <div className="course_inner">
                            <h3 className="course_title">제목</h3>
                            <p className="course_summary">
                                테스트중입니다.테스트중입니다.테스트중입니다.테스트중입니다
                            </p>
                        </div>
                    </div>
                    <div className="course col-xs-12 col-sm-6 col-md-4">
                        <img src="img/box1.jpg" alt="사진" />
                        <div className="course_inner">
                            <h3 className="course_title">제목</h3>
                            <p className="course_summary">
                                테스트중입니다.테스트중입니다.테스트중입니다.테스트중입니다
                            </p>
                        </div>
                    </div>
                    <div className="course col-xs-12 col-sm-6 col-md-4">
                        <img src="img/box1.jpg" alt="사진" />
                        <div className="course_inner">
                            <h3 className="course_title">제목</h3>
                            <p className="course_summary">
                                테스트중입니다.테스트중입니다.테스트중입니다.테스트중입니다
                            </p>
                        </div>
                    </div>
                    <div className="course col-xs-12 col-sm-6 col-md-4">
                        <img src="img/box1.jpg" alt="사진" />
                        <div className="course_inner">
                            <h3 className="course_title">제목</h3>
                            <p className="course_summary">
                                테스트중입니다.테스트중입니다.테스트중입니다.테스트중입니다
                            </p>
                        </div>
                    </div>
                    <div className="course col-xs-12 col-sm-6 col-md-4">
                        <img src="img/box1.jpg" alt="사진" />
                        <div className="course_inner">
                            <h3 className="course_title">제목</h3>
                            <p className="course_summary">
                                테스트중입니다.테스트중입니다.테스트중입니다.테스트중입니다
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}


export default Course;