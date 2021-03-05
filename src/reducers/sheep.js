import { ADD_SHEEP, BRAND_SHEEP} from '../utils/constants'

const sheep = (state = {}, action) => {
    switch (action.type) {
        case ADD_SHEEP:
            return {
                ...state,
                [action.newSheep.id]: {
                    ...action.newSheep
                }
            }
    
        default:
            return state
    }
}

export default sheep