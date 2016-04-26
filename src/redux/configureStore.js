import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/things'


const enhancer = compose(
    applyMiddleware(thunkMiddleware)
)

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers/things', () => {
            const nextRootReducer = require('./reducers/things').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}