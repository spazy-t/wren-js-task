import { SHEEP_CLICKED, CLEAR_CLICKED } from '../utils/constants'

export const sheepClicked = (clickedSheep) => ({
        type: SHEEP_CLICKED,
        clickedSheep
})

export const clearClicked = () => ({
        type: CLEAR_CLICKED
})