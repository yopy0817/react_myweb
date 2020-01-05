import React from 'react';
import Axios from 'axios';

class CourseRReply extends React.Component {
    state = {
        replyVO: {
            bno: this.props.bno,
            seq: 0,
            reply: "",
            reply_id: "",
            reply_pw: ""
        }
    }
    handleChange = (event) => {
        let nextState = this.state.replyVO; //기존의 state를 저장
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }
    //댓글 등록 메서드
    replyRegist = async(parent_rno) => {
        if(this.state.replyVO.reply === '') {
            alert("내용을 입력하세요");
        } else if(this.state.replyVO.reply_id.length < 4) {
            alert("아이디는 4글자 이상으로 입력하세요");
        } else if(this.state.replyVO.reply_pw.length < 4) {
            alert("비밀번호는 4글자 이상으로 입력하세요");
        } else {
            const {bno, seq, reply, reply_id, reply_pw} = this.state.replyVO;
            Axios.post("http://localhost:8282/replyRegist", //요청주소
                        {bno: bno, seq: seq, reply: reply, reply_id: reply_id, reply_pw: reply_pw, parent_rno: parent_rno } //전송할JSON
                        )
                        .then ( (res) => {
                            console.log("읭?", res);
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
    render() {
        const replyWrap = {padding: '15px 15px 15px 75px'}
        const replyImg = {left: '75px'}

        console.log("씨발좆같네", this.state.replyVO.bno)
        return (
            <form className="reply-wrap hide" id={this.props.rno} style={replyWrap}>
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
                        <button type="button" className="right btn btn-info" onClick={ ()=> {this.replyRegist(this.props.rno)}}>등록하기</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default CourseRReply;