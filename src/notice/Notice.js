import React from 'react';

class Notice extends React.Component {
    
    render() {
        return(
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-xs-12 board-table">
                        <div className="titlebox">
                            <p>공지사항</p>
                        </div>
                        <hr/>
                        <form action="freeList" method="get" name="searchForm" id="searchForm">
                        <div className="search-wrap" >
                           <span>총 150게시글</span>
                           <button type="button" className="btn btn-info search-btn" id="searchBtn">검색</button>
                           <input type="text" className="form-control search-input" name="searchName" id="searchName"/>
                           <select className="form-control search-select" name="searchType">
                                <option value="title" >제목</option>
                                <option value="content" >내용</option>
                                <option value="writer" >작성자</option>
                                <option value="titcont" >제목+내용</option>
                           </select>
                        </div>
                        <input type="hidden" name="pageNum" value="1"/>
                        <input type="hidden" name="amount" value="1"/>
                        </form>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th className="board-title">제목</th>
                                    <th>작성자</th>
                                    <th>등록일</th>
                                    <th>수정일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>테스트</td>
                                    <td>
                                    <a href="##">제목<span className="badge">1개</span></a>
                                    </td>
                                    <td>작성자</td>
                                    <td>등록일</td>
                                    <td>수정일</td>
                                </tr>
                            </tbody>
                        </table>
                        <form action="##" method="get" name="pageForm" id="pageForm">
                        <div className="text-center">
                        <hr/>
                        <ul className="pagination pagination-sm">
                           
                            <li><a href="##">이전</a></li>
                            <li className='active'>
                                <a href="##">1</a>
                            </li>
                            <li>
                                <a href="##">2</a>
                            </li>
                            <li><a href="##">다음</a></li>
                        </ul>
                       
                        <input type="hidden" name="pageNum" id="pageNum" value=""/>
                        <input type="hidden" name="amount" id="amount" value=""/>
                        <input type="hidden" name="searchType" value=""/>
                        <input type="hidden" name="searchName" value=""/>
                        <button type="button" className="btn btn-info" id="freeRegist">글쓰기</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}


export default Notice;