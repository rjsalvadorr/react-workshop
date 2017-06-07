import {TIMER_TICK} from "./types";

export function timerTick() {
    return {
        type: TIMER_TICK,
        now: new Date().getTime(),
    }
}
