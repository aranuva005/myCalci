//import { HISTORY,RESULT } from "../type"
import { HISTORY} from "../type"
export const storeHistory=(data)=>({
type:HISTORY,

payload:data
})

// export const storeResult=(data)=>({
//     type:RESULT,
    
//     payload:data
//     })