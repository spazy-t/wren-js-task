import React from 'react'

import AddSheepForm from './AddSheepForm'

const Menu = () => {
    return(
        <div className='mt-2 d-flex justify-content-between'>
            <AddSheepForm />
            <div>
                <button className='btn btn-danger' disabled>BRAND</button>
                <button className='btn btn-warning ml-1' disabled>MATE</button>
            </div>
        </div>
    )
}

export default Menu