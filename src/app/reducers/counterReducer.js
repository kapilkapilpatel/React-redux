
import { decTypes, incTypes } from "../action/actionTypes"

const initialState = {count:10}
const counterReducer = (state=initialState, action) =>{
    switch(action.type){
        case incTypes:
            return {...state, count:state.count + parseInt(action.payload)  }
        case decTypes:
            return {...state, count:state.count - parseInt(action.payload)}
        default:
            return state
    }
}

export default counterReducer;