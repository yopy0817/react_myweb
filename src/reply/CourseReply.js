import React from 'react';
import PropTypes from 'prop-types'; //npm i prop-types
import Axios from 'axios';  //npm i axios
import Moment from 'react-moment'; //npm install --save moment react-moment

class CourseReply extends React.Component {

    state = {
        replyVO: {
            bno: this.props.bno,
            seq: 0,
            reply: "",
            reply_id: "",
            reply_pw: ""
        },
        data:[]
    }
    //댓글 등록 메서드
    replyRegist = async(event) => {
        if(this.state.replyVO.reply === '') {
            alert("내용을 입력하세요");
        } else if(this.state.replyVO.reply_id.length < 4) {
            alert("아이디는 4글자 이상으로 입력하세요");
        } else if(this.state.replyVO.reply_pw.length < 4) {
            alert("비밀번호는 4글자 이상으로 입력하세요");
        } else {
            const {bno, seq, reply, reply_id, reply_pw} = this.state.replyVO;
            Axios.post("http://localhost:8282/replyRegist", //요청주소
                        {bno: bno, seq: seq, reply: reply, reply_id: reply_id, reply_pw: reply_pw } //전송할JSON
                        )
                        .then ( (res) => {
                            if(res.data === 1) {
                                this.setState({replyVO: {bno: bno, seq:0, reply:"", reply_id:"", reply_pw:""} })
                                this.getReply(bno);
                            } else {
                                alert("댓글 등록에 실패했습니다. 잠시후 다시 시도하세요.");
                            }
                        }).catch ( (error) => {
                            alert("댓글 등록에 실패했습니다. 잠시후 다시 시도하세요.");
                        })
        }
        
    }
    //댓글 핸들 메서드
    handleChange = (event) => {
        //console.log(event.target.name);
        //console.log(event.target.value);
        let nextState = this.state.replyVO; //기존의 state를 저장
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }
    
    getReply = async(bno) => {
        const {data} = await Axios.get(`http://localhost:8282/getReply/${bno}`);
        this.setState({data:data});
        
    }
    handleReply = (event) => {
        event.preventDefault();
        console.log(event.target);
    }
    replyTimestamp(date) {
        
    }

    //다른 메뉴를 클릭할때 업데이트 시켜주는 메서드(detail에서도 state가 변할때 실행되므로 조건을 잘 생각해야한다)
    componentDidUpdate(prevProps, prevState) {
        const {bno} = this.props; //prop에서 bno받음
        //prevState.replyVO.bno = bno; //bno를 이전 State에 저장
        if(prevProps.bno !== this.props.bno) {
            this.setState( { replyVO:{bno : bno, seq:0, reply:"", reply_id:"", reply_pw:""} } ); //State공백으로 업데이트
            this.getReply(bno); //댓글 get메서드호출
        }
    }
    componentDidMount() {
        const {bno} = this.props;
        this.getReply(bno); //댓글 get메서드호출
    }
    render() {
        console.log(this.state.data);

        const replyWrap = {padding: '15px 15px 15px 75px'}
        const replyImg = {left: '75px'}

        const mapResult = (data) => {
            return data.map( (result, i) => {
                return (
                    <div className='reply-wrap' style={result.seq === 0 ? {}: replyWrap } key={i}>
                        <div className='reply-image' style={result.seq === 0 ? {} : replyImg }>
                            <img src='../../img/profile.png' alt="프로필" />
                        </div>
                        <div className='reply-content'>
                            <div className='reply-group'>
                                <strong className='left'>{result.reply_id}</strong><small className='left'>
                                    <Moment format="YYYY/MM/DD HH:mm" /* fromNow */>{result.reply_date}</Moment>
                                </small>
                                <a href='##' className='right' id="replyModify" data-rno-id={result.rno} onClick={this.handleReply}>
                                    <span className='glyphicon glyphicon-pencil'></span>수정</a>
                                <a href='##' className='right' id="replyDelete">
                                    <span className='glyphicon glyphicon-remove'></span>삭제</a>
                                {result.seq === 0 //댓글인경우만 답글 보이기
                                ? <a href='##' className='right' id="replyDelete"><span className='glyphicon glyphicon-envelope'></span>답글</a> 
                                : ''    
                                }        
                            </div>
                            <p className='clearfix'>{result.reply}</p>
                        </div>
                        {/* 대댓글라인인데..... */}
                       

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
                            <button type="button" className="right btn btn-info" onClick={this.replyRegist}>등록하기</button>
                        </div>
                    </div>
                </form>
                <div id="replyList">
                    {mapResult(this.state.data)}
                    {/* 
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
                     */}

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