
import {TIMER_TICK} from '../types';

const MAX_TIME = 5 * 60;
const initialState = {
    time: 0,
    timeMinutes: 0,
    timeLeft: MAX_TIME,
}

function reduce(state = initialState, action) {
    if(action.type === TIMER_TICK) {
        return {
            ...state,
            timeLeft: state.timeLeft - 1,
        }
    }

    console.log('timer reduce', action);
    return state;
}

export default reduce;