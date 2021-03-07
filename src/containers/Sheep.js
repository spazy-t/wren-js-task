import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { sheepClicked, clearClicked } from '../actions/clicked'
import SheepImg from '../images/sheep.svg'
import $ from 'jquery'

//component to display a sheep when added
const Sheep = (props) => {
    const { sheepClicked, clearClicked, clickedNumber, sheepDetails } = props
    //ref to enable addition of branded class if branded
    const sheep = useRef(null)

    //check if the isBranded param is true -> add class to make it green / branded
    useEffect(() => {
        if(sheepDetails.branded) {
            sheep.current.classList.add('branded')
        }

        //jquery to enable tooltips
        $('.tip').tooltip('enable')
    })

    //TODO: when disabled allow rollover tooltip?

    //on click add the sheep's id to the clicked store state
    const handleClick = (evt) => {
        evt.preventDefault()
        //if the their are currently two sheep already clicked -> clear clicked arr in store and then add new one
        if(clickedNumber === 2) {
            clearClicked()
        }
        //add clicked sheep to clicked array
        sheepClicked(sheepDetails)
    }

    //sheep svg: https://www.svgrepo.com/svg/194496/sheep
    return (
        <div
            className='sheep m-1 tip'
            data-toggle='tooltip'
            data-placement='right'
            title={ `${sheepDetails.name}: ${sheepDetails.gender}` }
            onClick={ handleClick }
            ref={ sheep }>
                <SheepImg />
        </div>
    )
}

//grab the details of the sheep, so if it's branded colour it green, also get passed in props from parent to cross reference it's id
function mapStateToProps({ sheep, clicked }, { id }) {
    return {
        sheepDetails: sheep[id],
        clickedNumber: clicked.arr.length
    }
}

export default connect(mapStateToProps, { sheepClicked, clearClicked })(Sheep)