import { ADD_SHEEP, BRAND_SHEEP} from '../utils/constants'

//TODO: make the sheep id a unique random id

const sheep = (state = {}, action) => {
    switch (action.type) {
        case ADD_SHEEP:
            return {
                ...state,
                [Object.keys(state).length + 1]: {
                    ...action.newSheep,
                    id: Object.keys(state).length + 1
                }
            }

        case BRAND_SHEEP:
            return {
                ...state,
                [action.sheepId]: {
                    ...state[action.sheepId],
                    branded: true
                }
            }
    
        default:
            return state
    }
}

export default sheep