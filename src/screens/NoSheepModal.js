import React from 'react'
import $ from 'jquery'

const NoSheepModal = () => {
    return(
        <div className='modal fade' id='noSheep' tabIndex='-1'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button type='button' className='close' data-dismiss='modal' aria-label='close'>
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body d-flex justify-content-center'>
                        <h5 className='modal-title'>Mating unsuccessful, this time</h5>
                    </div>
                    <div className='modal-footer d-flex justify-content-center'>
                        <button type='button' className='btn btn-dark' data-dismiss='modal'>CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoSheepModal