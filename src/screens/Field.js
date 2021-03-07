import React from 'react'
import { connect } from 'react-redux'

import Sheep from '../containers/Sheep'

const Field = (props) => {
    const { sheepList } = props

    return (
        <div className='border border-dark mt-2 mb-2 bg-success d-flex flex-wrap justify-content-center align-items-center field'>
            {
                sheepList !== null &&(sheepList.map(sheep => (
                        <Sheep key={sheep.id} id={sheep.id} />
                    ))
                )
            }
        </div>
    )
}

function mapStateToProps({ sheep }) {
    //grab current sheep if any are in the store
    return {
        sheepList: sheep === null ? null : Object.values(sheep)
    }
}

export default connect(mapStateToProps)(Field)