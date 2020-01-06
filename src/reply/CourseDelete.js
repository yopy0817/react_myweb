import React from 'react';

class CourseDelete extends React.Component {

    render() {

        return (
            <div className="reply-delete hide" data-id={this.props.parent_rno}>
                <div>삭제하시겠습니까?</div>
                <div className="reply-input">
                    <input type="password" className="form-control" placeholder="비밀번호" name="reply_pw" />
                </div>
                <button type="button" className="right btn btn-info">삭제하기</button>
            </div>
            )
    }
}
export default CourseDelete;