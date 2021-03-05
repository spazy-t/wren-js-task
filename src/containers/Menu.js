import React from 'react'
import { connect } from 'react-redux'

import AddSheepForm from './AddSheepForm'
import { brandSheep } from '../actions/sheep'

const Menu = (props) => {
    const { toBrand, toMate, brandSheep } = props
    console.log('to brand:', toBrand)
    console.log('to mate:', toMate)

    const handleBrandClick = (evt) => {
        evt.preventDefault()

        //TODO: call thunk to brand and then clear clicked list
        brandSheep(toBrand)
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
                    disabled={ toMate === null }>MATE</button>
            </div>
        </div>
    )
}

//grabs the clicked array from store, if 1 sheep = clicked then set the toBrand prop -> enabling the branding button
//if there are two sheep clicked, set the toMate prop -> enabling mate button
function mapStateToProps({ clicked }) {
    return {
        toBrand: clicked.arr.length === 1 ? clicked.arr[0] : null,
        toMate: clicked.arr.length === 2 ? clicked.arr : null
    }
}

export default connect(mapStateToProps, { brandSheep })(Menu)