import {configureStore} from '@reduxjs/toolkit'
import Tokenreducer from './TokenContext'
import StateReducer from './StateContext'




const Store = configureStore({
    reducer : {
        auth : Tokenreducer,
        stateReducer : StateReducer
    }
})

export default Store