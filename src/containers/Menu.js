import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import $ from 'jquery'

import AddSheepForm from './AddSheepForm'
import { handleBranding } from '../actions/shared'
import { addSheep } from '../actions/sheep'
import { clearClicked } from '../actions/clicked'
import { checkCompatibility } from '../utils/helpers'
import NewSheepModal from './NewSheepModal'
import NoSheepModal from '../screens/NoSheepModal'

const Menu = (props) => {
    const { toBrand, toMate, handleBranding, addSheep, clearClicked } = props
    const [babyGender, setBabyGender] = useState(null)

    const handleBrandClick = (evt) => {
        evt.preventDefault()
        //call action to change relevant sheep in store to branded
        handleBranding(toBrand)
    }

    //function to randomly generate a gender for the new sheep if made, is passed into modal component via local state
    const handleBabySheep = () => {
        const genderArray = ['male', 'female']

        //randomly assign gender for new sheep
        const randomGender = Math.floor(Math.random()*genderArray.length)
        setBabyGender(genderArray[randomGender])

        //jquery to enable and show modal
        $('#newSheep').modal('show')
    }

    //handle check on the two sheep to see if can mate and determine birth of new one
    const handleMateClick = (evt) => {
        evt.preventDefault()

        //call helper method, which returns promise, to determine if sheep are compatible for mating
        checkCompatibility(toMate)
        .then(() => {
            //run 50% chance of new sheep
            const fiftyFifty = Math.random() < 0.5
            fiftyFifty < 0.5
                ? $('#noSheep').modal('show')
                : handleBabySheep()
        })
        .catch(err => {
            console.log('not compatible:', err)
            $('#noSheep').modal('show')
        })

        //calls action to clear stored clicked sheep -> removing highlight too
        clearClicked()
    }

    //houses modals to show breeding success or failure, and two action button 'mate' + 'brand'
    return(
        <div className='menu-container'>
            <NewSheepModal gender={ babyGender } />
            <NoSheepModal />
            <AddSheepForm />
            <div className='menu-btns'>
                <button
                    className='btn btn-danger'
                    disabled={ toBrand === null }
                    onClick={ handleBrandClick }>BRAND</button>
                <button
                    className='btn btn-warning'
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
        toBrand: clicked.arr.length === 1 ? clicked.arr[0].id : null,
        toMate: clicked.arr.length === 2 ? clicked.arr : null
    }
}

Menu.propTypes = {
    toBrand: PropTypes.number,
    toMate: PropTypes.array,
    handleBranding: PropTypes.func.isRequired,
    addSheep: PropTypes.func.isRequired,
    clearClicked: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { handleBranding, addSheep, clearClicked })(Menu)