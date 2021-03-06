export const checkCompatibility = (twoSheep) => {
    console.log('check compat for:', twoSheep)

    return new Promise((res, rej) => {
        twoSheep.length === 2
            ? checkDetails()
            : rej('too many sheep')

        function checkDetails() {
            console.log('check deets', twoSheep)
            let genderMatch = []

            //check if both sheep have the same gender, if they do add that sheep to genderMatch arr
            for(const sheep of twoSheep) {
                genderMatch = twoSheep.filter(aSheep => aSheep.gender === sheep.gender)
            }

            //if arr has more than one match then both sheep are same sex -> no birth
            genderMatch.length > 1
                ? rej('same sex')
                : res()
        }
    })
}