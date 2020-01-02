import React from 'react';
import Axios from 'axios';

class Course extends React.Component {

    state = {
        lecName: "",
        lecRegdate: "",
        data:[]
    }
    handleClick = (event) => {
        event.preventDefault();
        console.log(event.target)
    }

    getDetail = async() => {
        const {location} = this.props;
        const {lecNo, lecName, lecRegdate} = location.state;
        const {data} = await Axios.get(`http://localhost:8282/getDetail/${lecNo}`);
        this.setState({data:data, lecName:lecName, lecRegdate:lecRegdate});
    }
    componentDidMount() {
        this.getDetail();
    }

    render() {
        const mapResult = (data) => {
            console.log(data);
            return data.map( (result, i) => {
                return (
                    <li	className={`depth1 ${i === 0 ? 'select':''}`} key={i}>
                        <a href="##" onClick={this.handleClick}>{result.lecListName}</a>
                    </li>
                )
            });
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
                        <div className="contentDiv" id="contentDiv">
                            <div className="titlebox">
                                <p>{this.state.lecName}</p>
                                <small>{this.state.lecRegdate}</small>                    
                            </div>
                            <div className="content-inner">
                                <p>삶이 우리를 끝없이 시험하기에 고어텍스는 한계를 테스트합니다</p>
                            </div>
                            <div className="image-inner">
                                <img src="../img/img_ready.png" alt="강의동영상영역"/>
                            </div>
                            <div className="like-inner">
                                <img src="../img/icon.jpg" alt="좋아요"/><span>522</span>
                                <img src="../img/icon2.png" alt="즐겨찾기"/><span>5명이 수업참여중</span>
                            </div>
                        </div>
                        <div className="write-wrap">
                        <form className="reply-wrap">
                            <div className="reply-image">
                                <img src="../img/profile.png" alt="프로필"/>
                            </div>
                            <div className="reply-content">
                                <textarea className="form-control" rows="3" name="reply" id="reply"></textarea>
                                <div className="reply-group">
                                    <div className="reply-input">
                                        <input type="text" className="form-control" placeholder="이름" name="replyId" id="replyId"/> 
                                        <input type="password" className="form-control" placeholder="비밀번호" name="replyPw" id="replyPw"/>
                                    </div>
                                    <button type="button" className="right btn btn-info" id="replyRegist">등록하기</button>
                                </div>
                            </div>
                        </form>
                        <div id="replyList">
                            <div className='reply-wrap'>
                                <div className='reply-image'>
                                    <img src='../img/profile.png' alt="프로필"/>
                                </div>
                                <div className='reply-content'>
                                    <div className='reply-group'>
                                        <strong className='left'>honggildong</strong> <small className='left'>2019/12/10</small>
                                        <a href='##' className='right' id="replyModify">
                                        <span className='glyphicon glyphicon-pencil'></span>수정</a> 
                                        <a href='##'	className='right' id="replyDelete">
                                        <span className='glyphicon glyphicon-remove'></span>삭제</a>
                                    </div>
                                    <p className='clearfix'>여기는 댓글영역</p>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="form-control" id="moreList">더보기</button>
                    </div>
                        
                    </div>
                </div>
            </div>
        </section> 
        )
    }
}


export default Course;