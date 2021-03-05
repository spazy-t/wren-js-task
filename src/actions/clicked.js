import { SHEEP_CLICKED } from '../utils/constants'

export const sheepClicked = (clickedSheep) => ({
        type: SHEEP_CLICKED,
        clickedSheep
})