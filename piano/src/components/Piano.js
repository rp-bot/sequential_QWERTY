import React from 'react';
import { Key } from './Key.js'
import './Piano.css'
import _ from 'lodash'
import {NOTES} from '../global/constants.js'

class Piano extends React.Component{
    render(){
        const keys = _.map(NOTES, (note,index) =>{
            return(
                <Key
                key={index}
                note={note}
                />
            )
        })
        return(
         <div className='piano'>
            {keys}
         </div>   
        )
    }
}

export {Piano};