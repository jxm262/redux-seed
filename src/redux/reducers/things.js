import _ from 'lodash'
import * as actions from '../actions'

const initialState = []

export default function things(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_THINGS':
            //ex: loading spinner
            return state

        case 'RECEIVE_THINGS':
            //do something with it
            const nextState = _.cloneDeep(state)
            return nextState.push(action.thing)

        default:
            return state
    }
}