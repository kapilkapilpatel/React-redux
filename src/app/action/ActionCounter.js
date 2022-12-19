import {decTypes, incTypes} from './actionTypes'


  export const increment = (a) => {
    return {
       type:  incTypes,
       payload : a
       }
 }


 export const decrement = (a) => {
    return {
       type:  decTypes,
       payload : a
       }
    }
 