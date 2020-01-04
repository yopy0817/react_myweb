import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

import CourseReply from '../reply/CourseReply';

class CourseDetail extends React.Component {
    state = {
        lecNo: 0,
        lecName: "",
        lecRegdate: "",
        lecListNo: this.props.location.state.lecListNo, //현재선택되어있는 강의번호
        data:[]
    }
    getDetail = async() => {
        const {location} = this.props;
        const {lecNo, lecName, lecRegdate, lecListNo} = location.state;
        //console.log(lecNo, lecListNo)
        const {data} = await Axios.get(`http://localhost:8282/getDetail/${lecNo}`);
        //await Axios.get("http://localhost:8282/test");
        this.setState({data:data, lecNo:lecNo, lecName:lecName, lecRegdate:lecRegdate, lecListNo: lecListNo});
        
    }
    handleClick = (event) => {
        this.setState({lecListNo: parseInt( event.target.getAttribute("data-lec-id")) });
        //console.log(this.state.lecListNo)

    }

    componentDidMount() {
        this.getDetail();

    }

    render() {
        const mapResult = (data) => {
            return data.map( (result, i) => {
                return (
                    <li	className={`depth1 ${result.lecListNo === this.state.lecListNo ? 'select':''}`} key={i}>
                        <Link to={{
                            pathname: `/course/${result.lecNo}/${result.lecListNo}`,
                            state: {lecNo: result.lecNo, lecName: result.lecName, lecRegdate: result.lecRegdate, lecListNo: result.lecListNo}
                        }}>
                        <span data-lec-id={result.lecListNo} onClick={this.handleClick}>{result.lecListName}</span>
                        </Link>
                    </li>
                )
            });
        }
        const mapResult2 = (data) => {
                data.sort(); //정렬
                data = data.filter( (result) => {
                    return this.state.lecListNo === result.lecListNo;
                })
                if(data.length === 0) { //처음 로딩시에 탈출
                    return false;
                }
                return (
                    <div className="contentDiv" id="contentDiv">
                        <div className="titlebox">
                            <p>{data[0].lecListName}</p>
                            <small>{data[0].regdate}</small>                    
                        </div>
                        <div className="content-inner">
                            <p>삶이 우리를 끝없이 시험하기에 고어텍스는 한계를 테스트합니다</p>
                        </div>
                        <div className="image-inner">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fSx5sbrDPVo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="동영상"></iframe>
                            {/* <img src="../../img/img_ready.png" alt="강의동영상영역"/> */}
                        </div>
                        <div className="like-inner">
                            <img src="../../img/icon.jpg" alt="좋아요"/><span>{data[0].likes}</span>
                            <img src="../../img/icon2.png" alt="즐겨찾기"/><span>{data[0].bookMark} 명이 수업참여중</span>
                        </div>
                    </div>
                )
        }
        return(
            <section className="course-wrap">
            <div className="container">
                <div className="row">
                    <aside className="col-xs-12 col-sm-3 col-md-3">
                        <div className="menu2">
                            <div className="depth0">{this.state.lecName}</div>
                            <ul>
                                {mapResult(this.state.data)}
                            </ul>
                        </div>
                    </aside>
                    <div className="col-xs-12 col-sm-9 col-md-9 section-inner">
                        {mapResult2(this.state.data)}
                        <CourseReply bno={this.state.lecListNo}/>
                    </div>
                </div>
            </div>
        </section> 
        )
    }
}


export default CourseDetail;