import { createSlice } from '@reduxjs/toolkit';
// npm install @reduxjs/toolkit@5

const initialToken = localStorage.getItem('token')

const initialValue = {
    token: initialToken,
    isLoggedIn: initialToken
}

const auth = createSlice({
    name: 'auth',
    initialState: initialValue,
    reducers : {
        logOutHandler(state) {
            localStorage.removeItem('token')
            state.token = null;
            state.isLoggedIn = null
        },

        loginHandler(state, action) {
            state.token = action.payload;
            if (action.payload) {
                localStorage.setItem('token', action.payload);
                state.isLoggedIn = action.payload
            }
        }
    }
})


export const tokenAction = auth.actions
export default auth.reducer
