import React from 'react';
import './ImageLink.css';

const ImageLink=( { onInputChange,onSubmit } )=>{
    return(
        <div>
            <p className='f3'>
                {'This Brain will Detect Faces in the Images'}
            </p>
            <div className='center'>
            <div className='form pa4 br3 shadow-5'>
                <input type='text' className='f4 w-70 pa2' onChange={onInputChange} />
                <button className='w-30 f4 grow link ph3 pv2 dib white bg-light-purple pointer' onClick={onSubmit}>Detect</button>
            </div>
            </div>
        </div>
    )
}

export default ImageLink;