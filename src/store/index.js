import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'
import filter from 'redux-storage-decorator-filter'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'

export const history = createHistory()

const engine = createEngine('centrum-app')

const filteredEngine = filter(engine, ['question', 'user', 'remember'])
const storageMiddleware = storage.createMiddleware(
  filteredEngine,
  [],
  [
    'LOADING_APP'
  ]
)

const middleware = composeWithDevTools(
  applyMiddleware(thunk, storageMiddleware, routerMiddleware(history))
  )

const reducer = storage.reducer(rootReducer)

// const store = middleware(createStore)(reducer, {})
const store = createStore(reducer, middleware)

const load = storage.createLoader(engine)

load(store)

export default store
