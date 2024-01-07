import { createSlice } from '@reduxjs/toolkit';
// npm install @reduxjs/toolkit@5

const initialToken = localStorage.getItem('token')

const initialValue = {
    token: initialToken,
    isLoggedIn: initialToken,
    email : ''
}

const auth = createSlice({
    name: 'auth',
    initialState: initialValue,
    reducers : {
        logOutHandler(state) {
            localStorage.removeItem('token')
            state.token = null;
            state.isLoggedIn = null
            state.email = null
        },

        loginHandler(state, action) {
            state.token = action.payload.token;
            if (action.payload) {
                localStorage.setItem('token', action.payload.token);
                state.email = action.payload.email
                state.isLoggedIn = action.payload
            }
        }
    }
})


export const tokenAction = auth.actions
export default auth.reducer
