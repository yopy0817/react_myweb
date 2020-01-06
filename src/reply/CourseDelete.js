import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

class CourseDelete extends React.Component {

    state = {
        reply_pw: "",
    }
    //삭제비밀번호 핸들 메서드
    handleChange = (event) => {
         let nextState = this.state;
         nextState[event.currentTarget.name] = event.currentTarget.value;
         this.setState(nextState);     
    }
    //삭제 처리 메서드
    replyDelete = async(rno) => {
        const {reply_pw} = this.state;
        const {data} = await Axios.post("http://localhost:8282/replyDelete",
                                    {rno: rno, reply_pw: reply_pw}
                                    );
        if(data === 1) {//업데이트성공
            alert("삭제 처리되었습니다.");
            this.setState({reply_pw: ""}); //state초기화
            this.props.getReply(this.props.bno); //부모함수 실행
            this.props.toggleClose(); //토글처리 메서드
        } else { //업데이트 실패
            alert("비밀번호를 확인하세요!");
        }

    }

    render() {
        return (
            <div className="reply-delete hide" >
                <div>삭제하시겠습니까?</div>
                <div className="reply-input">
                    <input type="password" className="form-control" placeholder="비밀번호" name="reply_pw" value={this.state.reply_pw} onChange={this.handleChange} />
                </div>
                <button type="button" className="right btn btn-info" onClick={ () => this.replyDelete(this.props.rno)}>삭제하기</button>
            </div>
            )
    }
}

CourseDelete.propTypes = {
    rno: PropTypes.number,
    bno: PropTypes.number,
    getReply: PropTypes.func,
    toggleClose: PropTypes.func 
}

export default CourseDelete;