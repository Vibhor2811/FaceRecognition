import React from 'react';

const Navigation = ({ onrouteChange,isSignedin }) =>{
      if(isSignedin){
        return(
        <nav style={{display:'flex' , justifyContent:'flex-end'}}>
          <p onClick={()=>{onrouteChange('signin')}} className='f3 link dim black underline pa2 pointer'> SIGN OUT </p>
        </nav>
        )
      }
      else{
        return(
        <nav style={{display:'flex' , justifyContent:'flex-end'}}>
          <p onClick={()=>{onrouteChange('signin')}} className='f3 link dim black underline pa2 pointer'> SIGN IN </p>
          <p onClick={()=>{onrouteChange('register')}} className='f3 link dim black underline pa2 pointer'> REGISTER </p>
        </nav>
        )
      }
}

export default Navigation;