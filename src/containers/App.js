import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { doThing } from '../redux/actions'


class App extends Component {
    constructor(props) {
        super(props)
    }

    doThing = (thing) => {
        this.props.dispatch(doThing(thing))
    }

    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { things: state.things }
}

export default connect(mapStateToProps)(App)