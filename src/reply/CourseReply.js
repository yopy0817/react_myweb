import React from 'react';
import PropTypes from 'prop-types'; //npm i prop-types
import Axios from 'axios';  //npm i axios
import Moment from 'react-moment'; //npm install --save moment react-moment
import CourseRReply from './CourseRReply';
import CourseDelete from './CourseDelete';

class CourseReply extends React.Component {

    state = {
        replyVO: {
            bno: this.props.bno,
            reply: "",
            reply_id: "",
            reply_pw: ""
        },
        data:[]
    }
    //댓글 등록 메서드
    replyRegist = async(parent_rno) => {
        if(this.state.replyVO.reply === '') {
            alert("내용을 입력하세요");
        } else if(this.state.replyVO.reply_id.length < 3) {
            alert("아이디는 3자 이상으로 입력하세요");
        } else if(this.state.replyVO.reply_pw.length < 4) {
            alert("비밀번호는 4글자 이상으로 입력하세요");
        } else {
            const {bno, seq, reply, reply_id, reply_pw} = this.state.replyVO;
            Axios.post("http://localhost:8282/replyRegist", //요청주소
                        {bno: bno, seq: seq, reply: reply, reply_id: reply_id, reply_pw: reply_pw, parent_rno: parent_rno } //전송할JSON
                        )
                        .then ( (res) => {

                            if(res.data === 1) {
                                this.setState({replyVO: {bno: bno, seq:0, reply:"", reply_id:"", reply_pw:""} })
                                this.getReply(bno); //댓글 조회 함수
                                this.toggleClose(); //토글 닫는 함수
                            } else {
                                alert("댓글 등록에 실패했습니다. 잠시후 다시 시도하세요.");
                            }
                        }).catch ( (error) => {
                            alert("댓글 등록에 실패했습니다. 잠시후 다시 시도하세요.");
                        })
        }
    }
    //댓글 조회 함수
    getReply = async(bno) => {
        const {data} = await Axios.get(`http://localhost:8282/getReply/${bno}`);
        this.setState({data:data});
        
    }
    //댓글 핸들 메서드
    handleChange = (event) => {
        //console.log(event.target.name);
        //console.log(event.target.value);
        let nextState = this.state.replyVO; //기존의 state를 저장
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }
    //답글 클릭시 토글 처리
    handleReply = (event) => {
        //const rno = event.target.getAttribute("data-rno-id");
        //document.getElementById(rno).classList.toggle("hide");
        
        event.preventDefault();
        //previousSibling, nextSibling, parentNode, childeNodes
        event.currentTarget.parentNode.parentNode.parentNode.nextSibling.classList.toggle("hide");
        
    }
    //토글 닫는 함수
    toggleClose = () => {
        const result = document.querySelectorAll(".rrply, .reply-delete");
        result.forEach((element, index, array) => {
            element.classList.toggle("hide", true);
        }) 
    }

    handleReplyDelete = (event) => {
        event.preventDefault();
        event.currentTarget.parentNode.parentNode.parentNode.nextSibling.nextSibling.classList.toggle("hide");
    }


    //다른 메뉴를 클릭할때 업데이트 시켜주는 메서드(detail에서도 state가 변할때 실행되므로 조건을 잘 생각해야한다)
    componentDidUpdate(prevProps, prevState) {
        const {bno} = this.props; //prop에서 bno받음
        //prevState.replyVO.bno = bno; //bno를 이전 State에 저장
        if(prevProps.bno !== this.props.bno) {
            this.setState( { replyVO:{bno : bno, reply:"", reply_id:"", reply_pw:""} } ); //State공백으로 업데이트
            this.getReply(bno); //댓글 get메서드호출
            this.toggleClose(); //토글 닫는 함수
        }
    }
    componentDidMount() {
        const {bno} = this.props;
        this.getReply(bno); //댓글 get메서드호출
    }
    render() {
        const replyWrap = {padding: '15px 15px 15px 75px'}
        const replyImg = {left: '75px'}
        const replyDel = {marginLeft: '60px', height:'40px', lineHeight:'40px'}

        const mapResult = (data) => {
            console.log(data);
            return data.map( (result, i) => {
                return (
                    <div className='reply' key={i}>
                    <div className='reply-wrap' style={result.seq === 0 ? {}: replyWrap }>
                        <div className='reply-image' style={result.seq === 0 ? {} : replyImg }>
                            <img src='../../img/profile.png' alt="프로필" />
                        </div>
                        {result.is_delete === 'y' ? //삭제된 경우 삭제처리
                            <p style={replyDel}>삭제된 댓글입니다</p>
                        :
                        <div className='reply-content'>
                            <div className='reply-group'>
                                <strong className='left'>{result.reply_id}</strong><small className='left'>
                                    <Moment format="YYYY/MM/DD HH:mm" /* fromNow */>{result.reply_date}</Moment>
                                </small>
                                {/* 
                                <a href='##' className='right' id="replyModify" data-rno-id={result.rno}>
                                    <span className='glyphicon glyphicon-pencil' data-rno-id={result.rno}></span>수정</a>
                                 */}
                                <a href='##' className='right' id="replyDelete" onClick={this.handleReplyDelete}>
                                    <span className='glyphicon glyphicon-remove' ></span>삭제</a>
                                {result.seq === 0 //댓글인경우만 답글 보이기
                                ? <a href='##' className='right' id="replyDelete" onClick={this.handleReply}>
                                    <span className='glyphicon glyphicon-envelope'></span>답글</a> 
                                : ''    
                                }        
                            </div>
                            <p className='clearfix'>{result.reply}</p>
                        </div>
                        }
                    </div>
                        {/* 대댓글등록(hide로 숨김처리) 함수전달*/}
                        <CourseRReply reply_id={result.reply_id} parent_rno={result.rno} bno={result.bno} getReply={(i) => { this.getReply(i) }} toggleClose={()=> {this.toggleClose()}}/>
                        {/* 댓글 삭제처리 */}
                        <CourseDelete rno={result.rno} bno={result.bno} getReply={(i) => { this.getReply(i) }} toggleClose={()=> {this.toggleClose()}} />
                        {/* 
                        <form className="reply-wrap rrply hide" id={result.rno} style={replyWrap}>
                            <div className="reply-image" style={replyImg}>
                                <img src="../../img/profile.png" alt="프로필" />
                            </div>
                            <div className="reply-content">
                                <textarea className="form-control" rows="3" name="reply" value={this.state.replyVO.reply} onChange={this.handleChange}></textarea>
                                <div className="reply-group">
                                    <div className="reply-input">
                                        <input type="text" className="form-control" placeholder="이름" name="reply_id" value={this.state.replyVO.reply_id} onChange={this.handleChange} />
                                        <input type="password" className="form-control" placeholder="비밀번호" name="reply_pw" value={this.state.replyVO.reply_pw} onChange={this.handleChange} />
                                    </div>
                                    <button type="button" className="right btn btn-info" onClick={() => { this.replyRegist(result.rno) }}>등록하기</button>
                                </div>
                            </div>
                        </form>
                        */}
                    </div>
                )
            })
        }
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
                            <button type="button" className="right btn btn-info" onClick={ ()=> {this.replyRegist(0)}}>등록하기</button>
                        </div>
                    </div>
                </form>
                <div id="replyList">
                    {mapResult(this.state.data)}
                </div>
                {/* <button type="button" className="form-control" id="moreList">더보기</button> */}
            </div>
        )
    }
}

CourseReply.propTypes = {
    bno : PropTypes.number
}

export default CourseReply;