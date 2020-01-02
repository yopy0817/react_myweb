import React from 'react';

class CourseDetailList extends React.Component {

    render() {
        console.log(this.props);
        return (
            <li	className={`depth1`} key={this.props.num}>
                <a href="##" >테스트</a>
            </li>
        );
    }
}

export default CourseDetailList;