import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

import { addSheep } from '../actions/sheep'

//modal component to decide name of new sheep from mating
const NewSheepModal = (props) => {
    const { addSheep, gender } = props
    const [babyName, setBabyName] = useState('')

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
        <div className='modal fade' data-backdrop='static' id='newSheep' tabIndex='-1'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header d-flex justify-content-center'>
                        <h5>It's a { gender === 'male' ? 'boy' : 'girl' }</h5>
                    </div>
                    <div className='modal-body d-flex justify-content-center'>
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