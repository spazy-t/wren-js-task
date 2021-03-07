import React from 'react'

import Field from './Field'
import Menu from '../containers/Menu'

//TODO: add in proptypes

const App = () => {
    return(
        <main className='container'>
            <Menu />
            <Field />
        </main>
    )
}

export default App