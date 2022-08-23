import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Reducers/UserReducer";


const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    user: UserReducer,
   
})


const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const initialState ={
    user: {userInfo: userInfoFromLocalStorage}
}


const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;