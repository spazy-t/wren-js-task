import { SHEEP_CLICKED } from '../utils/constants'

//initiate array value to therefore add sheep when clicked
const initArrState = {
    arr: []
}

//TODO: clear clicked array on third sheep click before adding it to array

//holds id of a sheep when clicked
const clicked = (state = initArrState, action) => {
    switch (action.type) {
        case SHEEP_CLICKED:
            return {
                ...state,
                arr: [...state.arr, action.clickedSheep]
            }
    
        default:
            return state
    }
}

export default clicked