import React from 'react'
import {PropTypes} from 'react'
import {connect} from 'react-redux'

const TimeLeft = ({timeLeft}) => {
    return (
    <div>
        Time left: {timeLeft} seconds
    </div>
    )
}

TimeLeft.propTypes = {
    timeLeft: PropTypes.number,
}

function mapStateToProps(state) {
    return {
        timeLeft: state.timer.timeLeft,
    }
}

export default connect(mapStateToProps)(TimeLeft);
