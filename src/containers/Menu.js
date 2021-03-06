import React from 'react'
import { connect } from 'react-redux'

import AddSheepForm from './AddSheepForm'
import { handleBranding } from '../actions/shared'
import { checkCompatibility } from '../utils/helpers'

const Menu = (props) => {
    const { toBrand, toMate, handleBranding } = props
    console.log('to brand:', toBrand)
    console.log('to mate:', toMate)

    const handleBrandClick = (evt) => {
        evt.preventDefault()

        //TODO: if already branded can't click said sheep
        handleBranding(toBrand)
    }

    //handle check on the two sheep to see if can mate and determine birth of new one
    const handleMateClick = (evt) => {
        evt.preventDefault()

        //call helper method, which returns promise, to determine if sheep are compatible for mating
        checkCompatibility(toMate)
        .then(() => {
            //TODO: clear clicked
            console.log('mating!')
            //run 50% chance of new sheep
            const fiftyFifty = Math.random() < 0.5
            fiftyFifty < 0.5
                ? console.log('no baby')
                : console.log('a baby!')
        })
        .catch(err => console.log('not compatible:', err))
    }

    return(
        <div className='mt-2 d-flex justify-content-between'>
            <AddSheepForm />
            <div>
                <button
                    className='btn btn-danger'
                    disabled={ toBrand === null }
                    onClick={ handleBrandClick }>BRAND</button>
                <button
                    className='btn btn-warning ml-1'
                    disabled={ toMate === null }
                    onClick={ handleMateClick }>MATE</button>
            </div>
        </div>
    )
}

//grabs the clicked array from store, if 1 sheep = clicked then set the toBrand prop -> enabling the branding button
//if there are two sheep clicked, set the toMate prop -> enabling mate button
function mapStateToProps({ clicked }) {
    return {
        toBrand: clicked.arr.length === 1 ? clicked.arr[0].name : null,
        toMate: clicked.arr.length === 2 ? clicked.arr : null
    }
}

export default connect(mapStateToProps, { handleBranding })(Menu)