import { combineReducers } from 'redux'
import sheep from './sheep'
import clicked from './clicked'

export default combineReducers({
    sheep,
    clicked
})