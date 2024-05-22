import {configureStore} from '@reduxjs/toolkit'
import {reducers} from '../features/todoSlicers'


export const store=configureStore({  
// ReduxToolkit gives us a configurableStore which takes methods that will be able to change data in the store
  reducer:reducers
})  

// Store is global context from where we can fetch data from anywhere
//---------------------------------------------------------------------------------------
// Do Reducers are called slices ?
// Reducers are nothing but the methods for fetching and updating the data in the store...
// Only these methods are allowed to change anything from the store to maintain data integerity...