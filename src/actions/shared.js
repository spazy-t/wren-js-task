import { brandSheep } from './sheep'
import { clearClicked } from './clicked'

//consolidate the branding of a sheep and then clear the list of sheep clicked
export const handleBranding = (sheepId) => {
    return(dispatch) => {
        dispatch(brandSheep(sheepId))
        dispatch(clearClicked())
    }
}