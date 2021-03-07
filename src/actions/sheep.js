import { ADD_SHEEP, BRAND_SHEEP } from '../utils/constants'

//action to add sheep to store state
export const addSheep = (newSheep) => ({
    type: ADD_SHEEP,
    newSheep
})

//action to change a sheep's branding status in the store state
export const brandSheep = (sheepId) => ({
    type: BRAND_SHEEP,
    sheepId
})