// configuring the redux to the app
import { configureStore } from '@reduxjs/toolkit' 
// import userReducer from "./reducers/user"

import historyReducer from "./reducer"

export default configureStore({
  reducer: {
      user:historyReducer
  }
})