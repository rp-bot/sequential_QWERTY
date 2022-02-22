import React from 'react';
import { Key } from './Key.js'

class Piano extends React.Component{
    render(){
        return(
         <div>
            <h1>PIANO!</h1>
            <Key/>
            <Key/>
            <Key/>
         </div>   
        )
    }
}

export {Piano};