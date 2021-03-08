import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Sheep from './Sheep'

const Field = (props) => {
    const { sheepList } = props

    //displays field and places in any sheep currently in the store state
    return (
        <div className='mt-2 mb-2 bg-success d-flex flex-wrap justify-content-center align-items-center field'>
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

Field.propTypes = {
    sheepList: PropTypes.array
}

export default connect(mapStateToProps)(Field)