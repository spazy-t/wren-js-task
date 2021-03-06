import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

import { addSheep } from '../actions/sheep'

//modal component to decide name of new sheep from mating
const NewSheepModal = (props) => {
    const { addSheep, gender } = props
    const [babyName, setBabyName] = useState('')

    //TODO: make static modal, ie can't click out withou completing
    //handles adding new sheep to store state with passed in random gender and fallback name
    const handleSubmit = (evt) => {
        evt.preventDefault()

        addSheep({
            name: babyName === '' ? 'Jnr' : babyName,
            gender: gender,
            branded: false
        })

        //hide modal
        $('#newSheep').modal('hide')
    }

    return(
        <div className='modal fade' id='newSheep' tabIndex='-1'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5>It's a {gender}</h5>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={ handleSubmit }>
                            <input
                                type='text'
                                placeholder='Enter new name'
                                value={ babyName }
                                onChange={ (evt) => setBabyName(evt.target.value) } />
                            <button className='btn btn-dark ml-1' type='submit'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

//pass in action to be dispatched, to add sheep to store state
export default connect(null, { addSheep })(NewSheepModal)