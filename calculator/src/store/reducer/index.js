//import {HISTORY,RESULT} from "../type"
import {HISTORY} from "../type"
const initialState = {
    history:"",
    result:''
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case HISTORY:
        return {
          ...state,
          history:action.payload
        };

        // case RESULT:
        //     return {
        //         ...state,
        //         result:action.payload
        //     }
      
  
      default:
        return state;
    }
  }