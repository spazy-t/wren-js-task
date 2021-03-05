import React from 'react'

import Field from './Field'
import Menu from '../containers/Menu'

const App = () => {
    return(
        <main className='vh-100 container'>
            <Menu />
            <Field />
        </main>
    )
}

export default App