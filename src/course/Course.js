import React from 'react';
import Axios from 'axios';

import CourseList from './CourseList';

class Course extends React.Component {
    
    state = {
        isLoading:true,
        courseList:[],
        loadingImg:['../img/blog1.png', '../img/blog2.png', '../img/blog3.jpg', '../img/blog4.png'],
        isLoadingImg: true
    }
    
    getCourse = async(interval) => {// async는 이 함수는 비동기야 await가 끝날떄 까지 기다려줘! 라는 것을 의미한다
        const {data} = await Axios.get("http://localhost:8282/getCourse");
        
        this.setState({courseList:data, isLoading:false}); //state변경, 로딩후 여부를 false로
        clearInterval(interval); //interval메서드 중지
    }
    //랜더 이후 실행함수
    componentDidMount() {
        let interval = setInterval(() => {//로딩중 화면변경 기능
                this.setState({ isLoadingImg: true })
        }, 300);
        this.getCourse(interval); //비동기 함수 실행
    }
    render() {

        const result = (<div className="loading">
                            <img className="loading_img" src={this.state.loadingImg[parseInt(Math.random() * 3)]} alt="로딩이미지"/>
                       </div>)
        const mapResult = (courseList) => {
            return courseList.map((result, i) => {
                return <CourseList key={i} 
                                   lecNo={result.lecNo} 
                                   lecName={result.lecName} 
                                   lecRegdate={result.lecRegdate}
                                   lecImg={result.lecImg}
                                   />
            })
        }

        return (
            <section>
            {this.state.isLoading ? result : 
            <div className="container">
                <div className="row">
                    <div className="titlebox">
	                    	<p>강의목록</p>
	                    	<small>언어</small>                    
	                </div>
                    {mapResult(this.state.courseList)}
                    {/* 
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
                     */}
                </div>
            </div>
            }
            </section>
        )
    }
}


export default Course;