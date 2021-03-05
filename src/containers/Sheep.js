import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { sheepClicked } from '../actions/clicked'
import { brandSheep } from '../actions/sheep'

//component to display a sheep when added
const Sheep = (props) => {
    const { sheepClicked, id, isBranded } = props
    //ref to enable addition of branded class if branded
    const sheep = useRef(null)

    //check if the isBranded param is true -> add class to make it green / branded
    useEffect(() => {
        if(isBranded) {
            sheep.current.classList.add('branded')
        }
    })

    //on click add the sheep's id to the clicked store state
    const handleClick = (evt) => {
        evt.preventDefault()

        sheepClicked(id)
    }

    return (
        <div className='sheep' onClick={ handleClick } ref={ sheep }></div>
    )
}

//grab the details of the sheep, so if it's branded colour it green, also get passed in props from parent to cross reference it's id
function mapStateToProps({ sheep }, { id }) {
    return {
        isBranded: sheep[id].branded
    }
}

export default connect(mapStateToProps, { sheepClicked })(Sheep)