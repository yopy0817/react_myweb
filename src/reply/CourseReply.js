import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

class CourseReply extends React.Component {

    state = {
        replyVO: {
            bno: this.props.bno,
            depth: 1,
            reply: "",
            reply_id: "",
            reply_pw: ""
        }
    }
    //댓글 등록 메서드
    replyRegist = (event) => {
        if(this.state.replyVO.reply === '') {
            alert("내용을 입력하세요");
        } else if(this.state.replyVO.reply_id.length < 4) {
            alert("아이디는 4글자 이상으로 입력하세요");
        } else if(this.state.replyVO.reply_pw.length < 4) {
            alert("비밀번호는 4글자 이상으로 입력하세요");
        }
        const {bno, reply, reply_id, reply_pw} = this.state.replyVO;
        let result = Axios.post("http://localhost:8282/replyRegist", //요청주소
                     {bno: bno, reply: reply, reply_id: reply_id, reply_pw: reply_pw } //전송할JSON
                     );
        console.log(result);
    }
    //댓글 핸들 메서드
    handleChange = (event) => {
        //console.log(event.target.name);
        //console.log(event.target.value);
        let nextState = this.state.replyVO; //기존의 state를 저장
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        const {bno} = this.props; //prop에서 bno받음
        //prevState.replyVO.bno = bno; //bno를 이전 State에 저장
        if(prevProps.bno !== this.props.bno) {
            this.setState( { replyVO:{bno : bno} } ); //State업데이트
        }
    }
    render() {
        console.log(this.state.replyVO);
        return (
            <div className="write-wrap">
                <form className="reply-wrap">
                    <div className="reply-image">
                        <img src="../../img/profile.png" alt="프로필"/>
                    </div>
                    <div className="reply-content">
                        <textarea className="form-control" rows="3" name="reply" value={this.state.replyVO.reply} onChange={this.handleChange}></textarea>
                        <div className="reply-group">
                            <div className="reply-input">
                                <input type="text" className="form-control" placeholder="이름" name="reply_id" value={this.state.replyVO.reply_id} onChange={this.handleChange}/>
                                <input type="password" className="form-control" placeholder="비밀번호" name="reply_pw" value={this.state.replyVO.reply_pw}  onChange={this.handleChange} />
                            </div>
                            <button type="button" className="right btn btn-info" onClick={this.replyRegist}>등록하기</button>
                        </div>
                    </div>
                </form>
                <div id="replyList">
                    <div className='reply-wrap'>
                        <div className='reply-image'>
                            <img src='../../img/profile.png' alt="프로필" />
                        </div>
                        <div className='reply-content'>
                            <div className='reply-group'>
                                <strong className='left'>honggildong</strong><small className='left'>2019/12/10</small>
                                <a href='##' className='right' id="replyModify">
                                    <span className='glyphicon glyphicon-pencil'></span>수정</a>
                                <a href='##' className='right' id="replyDelete">
                                    <span className='glyphicon glyphicon-remove'></span>삭제</a>
                            </div>
                            <p className='clearfix'>여기는 댓글영역</p>
                        </div>
                    </div>
                </div>
                <button type="button" className="form-control" id="moreList">더보기</button>
            </div>
        )
    }
}

CourseReply.propTypes = {
    bno : PropTypes.number
}

export default CourseReply;