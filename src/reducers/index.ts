import { combineReducers } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import reposReducer from './reposReducer'

const rootReducer = combineReducers({
  repos: reposReducer,
})
