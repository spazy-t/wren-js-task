import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { sheepClicked } from '../actions/clicked'

//component to display a sheep when added
const Sheep = (props) => {
    const { sheepClicked, sheepDetails } = props
    //ref to enable addition of branded class if branded
    const sheep = useRef(null)

    //check if the isBranded param is true -> add class to make it green / branded
    useEffect(() => {
        if(sheepDetails.branded) {
            sheep.current.classList.add('branded')
        }
    })

    //TODO: stop a second click on same sheep

    //on click add the sheep's id to the clicked store state
    const handleClick = (evt) => {
        evt.preventDefault()

        sheepClicked(sheepDetails)
    }

    //TODO: make tooltip look nicer (init toolTip somehow?)

    return (
        <div
            className='sheep'
            data-toggle='tooltip'
            data-placement='right'
            title={ `${sheepDetails.name}: ${sheepDetails.gender}` }
            onClick={ handleClick }
            ref={ sheep }>
        </div>
    )
}

//grab the details of the sheep, so if it's branded colour it green, also get passed in props from parent to cross reference it's id
function mapStateToProps({ sheep }, { id }) {
    return {
        sheepDetails: sheep[id]
    }
}

export default connect(mapStateToProps, { sheepClicked })(Sheep)