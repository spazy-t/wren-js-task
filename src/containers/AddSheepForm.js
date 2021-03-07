import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addSheep } from '../actions/sheep'

const AddSheepForm = (props) => {
    const { addSheep } = props
    const [sheepName, setSheepName] = useState('')
    const [sheepGender, setSheepGender] = useState(null)
    const radioOne = useRef(false)
    const radioTwo = useRef(false)

    //called when submit button is pressed
    const handleSubmit = (evt) => {
        evt.preventDefault()

        //dispatches sheep action to add to redux store and passes object with chosen name and gender
        addSheep({
            name: sheepName,
            gender: evt.target.genderRadios.value,
            branded: false
        })

        //clear radio buttons if checked
        radioOne.current.checked = false
        radioTwo.current.checked = false
        //clears the sheep name and gender local state to clears the input text
        setSheepName('')
        setSheepGender(null)
    }

    //form to add new sheep one text and two radio inputs and a submit button
    return(
        <form className='add-sheep-form' onSubmit={ handleSubmit }>
            <input
                autoFocus={ true }
                className='sheep-name'
                type='text'
                placeholder='New sheep name'
                value={ sheepName }
                onChange={ evt => setSheepName(evt.target.value) } />
            <div className='form-group m-0'>
                <input
                    className='ml-2 mr-1 gender-radio'
                    name='genderRadios'
                    type='radio'
                    id='male'
                    value='male'
                    onClick={ evt => setSheepGender(evt.target.value) }
                    ref={ radioOne } />
                <label htmlFor='male' className='m-0'>Male</label>
            </div>
            <div className='form-group m-0'>
                <input
                    className='ml-2 mr-1 gender-radio'
                    name='genderRadios'
                    type='radio'
                    id='female'
                    value='female'
                    onClick={ evt => setSheepGender(evt.target.value) }
                    ref={ radioTwo } />
                <label htmlFor='female' className='m-0'>Female</label>
            </div>
            <button
                className='btn btn-dark'
                type='submit'
                disabled={ sheepName === '' || sheepGender === null }>ADD</button>
        </form>
    )
}

AddSheepForm.propTypes = {
    addSheep: PropTypes.func.isRequired
}

export default connect(null, { addSheep })(AddSheepForm)