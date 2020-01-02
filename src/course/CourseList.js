import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CourseList extends React.Component {

    render() {
        
        const {lecNo, lecName, lecRegdate, lecImg} = this.props;
        return (
            <div className="course col-xs-12 col-sm-6 col-md-4">
                <Link to={{
                      pathname: `/course/${lecNo}/${lecNo}`,
                      state: {lecNo: lecNo, lecName: lecName, lecRegdate: lecRegdate, lecListNo: lecNo}      
                }}>
                <img src={`http://localhost:8282/display/${lecImg}`} alt="사진" />
                </Link>
                <div className="course_inner">
                    <h3 className="course_title">{lecName}</h3>
                    <p className="course_summary">
                        {lecRegdate}
                    </p>
                </div>
            </div>
            
        )
    }
}

CourseList.propTypes = {
    lecNo: PropTypes.number,
    lecName: PropTypes.string,
    lecRegdate: PropTypes.string,
    lecImg:PropTypes.string
}

export default CourseList;