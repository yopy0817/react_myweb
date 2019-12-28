import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="copyright">
                            <a href="##">
                                <img width="20" src="../resources/img/logo.svg" alt="Brand"/>
                            </a>
                            Bootstrap | 대표자 : 홍길동 | E-MAIL : info&#64;info.com<br/>
                            사업자번호 : 123-56-78910 | 개인정보보호책임자 : 홍길동 | 통신판매업 : 2019-서울강남-0001<br/>
                            주소 : 서울시 강남구
                            <address>&copy;Bootstrap. ALL RIGHTS RESERVED</address>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 text-right">
                        <ul className="footer-menu">
                            <li><a href="##">고객센터</a></li>
                            <li><a href="##">이용약관</a></li>
                            <li><a href="##">개인정보취급방침</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}


export default Footer;