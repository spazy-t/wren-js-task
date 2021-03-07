import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

import { addSheep } from '../actions/sheep'

//modal component to decide name of new sheep from mating is successful
const NewSheepModal = (props) => {
    const { addSheep, gender } = props
    const [babyName, setBabyName] = useState('')

    //use jquery from bootstrap to add focus on input when modal shown
    useEffect(() => {
        $('#newSheep').on('shown.bs.modal', function () {
            $('#newSheepName').trigger('focus')
            //fix to stop modal adding right padding to body when modal shown
            $('body').addClass('fix')
        })
    })

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
        //clear input for next time
        setBabyName('')
    }

    //static modal that shows gender message and provides input to name new sheep
    return(
        <div className='modal' data-backdrop='static' id='newSheep' tabIndex='-1'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header d-flex justify-content-center'>
                        <h5 className='m-0'>It's a { gender === 'male' ? 'boy' : 'girl' }</h5>
                    </div>
                    <div className='modal-body d-flex justify-content-center'>
                        <form className='d-flex flex-column' onSubmit={ handleSubmit }>
                            <input
                                id='newSheepName'
                                type='text'
                                placeholder='Enter new name'
                                value={ babyName }
                                onChange={ (evt) => setBabyName(evt.target.value) } />
                            <button className='btn btn-dark mt-1' type='submit'>ADD</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

//pass in action to be dispatched, to add sheep to store state
export default connect(null, { addSheep })(NewSheepModal)