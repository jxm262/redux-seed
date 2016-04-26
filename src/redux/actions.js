import request from 'superagent'


function requestThing() {
    return {
        type: 'REQUEST_THING'
    }
}

function receiveThing(thing) {
    return {
        type: 'RECEIVE_THING',
        thing: thing
    }
}


export const doThing = (thing) => {
    return function (dispatch) {
        dispatch(requestThing())

        //ajax

        dispatch(receiveThing(thing))
    }
}