import { SHEEP_CLICKED, CLEAR_CLICKED } from '../utils/constants'

//action to store clicked sheep data
export const sheepClicked = (clickedSheep) => ({
        type: SHEEP_CLICKED,
        clickedSheep
})

//action to clear the store array of clicked sheep
export const clearClicked = () => ({
        type: CLEAR_CLICKED
})