import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {timerTick} from './actions'

const TimeDisplay = ({timeMinutes, time}) => {
    return (<div className="timer-time">{timeMinutes}m {time}s</div>)
}

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeMinutes: 0,
            time: 0,
            running: false
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            if(!this.state.running) return;

            if(this.state.time >= 59) {
                this.setState({
                    time: 0,
                    timeMinutes: this.state.timeMinutes + 1,
                });
            } else {
                this.setState({
                    time: this.state.time + 1
                });
            }

            this.props.onTick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleStart = (e) => {
        this.setState({
            running: true
        })
    }

    handleStop = (e) => {
        this.setState({
            running: false
        })
    }

    render() {
        const {timeLeft} = this.props;
        return(
            <div className="timer custom-component">
                <TimeDisplay timeMinutes={this.state.timeMinutes} time={this.state.time}/>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
                <div>
                    Time left: {timeLeft} seconds
                </div>
            </div>
        )
    } 
}

Timer.propTypes = {
    timeLeft: PropTypes.number,
    onTick: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        timeLeft: state.timer.timeLeft,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTick: () => dispatch(timerTick())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);