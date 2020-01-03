import React from 'react';

class ReplyModal extends React.Component {

    render() {
        return (
            <div className="modal fade" id="replyModal" role="dialog">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn btn-default pull-right" data-dismiss="modal">닫기</button>
                        <h4 className="modal-title">댓글수정</h4>
                    </div>
                    <div className="modal-body">
                        <div className="reply-content">
                        <textarea className="form-control" rows="4" id="modalReply" placeholder="내용입력" ></textarea>
                        <div className="reply-group">
                            <div className="reply-input">
                                <input type="hidden" id="modalRno"/>
                                <input type="password" className="form-control" placeholder="비밀번호" id="modalPw"/>
                            </div>
                            <button className="right btn btn-info" id="modalModBtn">수정하기</button>
                            <button className="right btn btn-info" id="modalDelBtn">삭제하기</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ReplyModal;