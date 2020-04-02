import React from 'react';
import 'tachyons';
import './Facerecog.css'

const FaceRecog = ({ ImageUrl,Box }) =>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
               <img id='inputImage' alt='' src={ImageUrl} width='500px' height='auto' />
               <div className='boundingBox' style={{top:Box.topRow, left:Box.leftCol, bottom:Box.bottomRow, right:Box.rightCol }}>
               </div>
            </div>
        </div>
    )
}

export default FaceRecog;