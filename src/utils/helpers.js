//helper to determine if two chosen sheep pass the breeding rules, passes back a promise
export const checkCompatibility = (twoSheep) => {
    return new Promise((res, rej) => {
        twoSheep.length === 2
            ? checkDetails()
            : rej('too many sheep')

        function checkDetails() {
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