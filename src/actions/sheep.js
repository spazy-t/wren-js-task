import { ADD_SHEEP, BRAND_SHEEP } from '../utils/constants'

export const addSheep = (newSheep) => ({
    type: ADD_SHEEP,
    newSheep
})