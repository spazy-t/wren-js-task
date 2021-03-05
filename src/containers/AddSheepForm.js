import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSheep } from '../actions/sheep'

const AddSheepForm = (props) => {
    const { addSheep } = props
    const [sheepName, setSheepName] = useState('')
    const [sheepGender, setSheepGender] = useState(null)

    //called when submit button is pressed
    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log('handle submit')

        //dispatches sheep action to add to redux store and passes object with chosen name and gender
        addSheep({
            name: sheepName,
            gender: evt.target.genderRadios.value
        })

        //clears the sheep name and gender local state to clear the input text
        setSheepName('')
        setSheepGender(null)
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                placeholder='New sheep name'
                value={ sheepName }
                onChange={ evt => setSheepName(evt.target.value) } />
            <input
                className='ml-2 mr-1'
                name='genderRadios'
                type='radio'
                id='male'
                value='male'
                onClick={ evt => setSheepGender(evt.target.value) } />
            <label htmlFor='male'>Male</label>
            <input
                className='ml-2 mr-1'
                name='genderRadios'
                type='radio'
                id='female'
                value='female'
                onClick={ evt => setSheepGender(evt.target.value) } />
            <label htmlFor='female'>Female</label>
            <button
                className='btn btn-dark ml-2'
                type='submit'
                disabled={ sheepName === '' || sheepGender === null }>Add</button>
        </form>
    )
}

export default connect(null, { addSheep })(AddSheepForm)