// configuring the redux to the app
import { configureStore } from '@reduxjs/toolkit' 
// import userReducer from "./reducers/user"
//importing the reducer 
import historyReducer from "./reducer"

export default configureStore({
  reducer: {
      user:historyReducer
  }
})