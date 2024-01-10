import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import classes from './sinup.module.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tokenAction } from '../../Store/TokenContext';

const SinUp = (props) =>{
    
    const dispatch = useDispatch()

    const [isLogin, setIsLogin] = useState(true);
    const [isLodding, setIsLodding] = useState(false);
    const history = useHistory()

    const enteredEmailRef = useRef()
    const enteredPasswordRef = useRef()
    const enteredConfirmPasswordRef = useRef()
    // const enteredNameRef = useRef()

    const port = process.env.REACT_APP_PORT;

    const submiSinuptHandler = async(event)=>{
        event.preventDefault()
        // console.log(enteredNameRef.current.value)

        const obj = {
                    // name : enteredNameRef.current.value,
                    email : enteredEmailRef.current.value,
                    password : enteredPasswordRef.current.value
                }

        const res = await axios.post(
            `http://${port}/user/sinup`,
            obj
          )

        if(res.data.msg ===  "Registered"){
            switchAuthModeHandler()
        }

        console.log(res)
    }


    const submiLogIntHandler = async(event)=>{
        event.preventDefault()

        try{
            setIsLodding(true)
            const obj = {
                email : enteredEmailRef.current.value,
                password : enteredPasswordRef.current.value
            }

            const res = await axios.post(`http://${port}/user/login`,obj)
            setIsLodding(false)
            // dispatch(tokenAction.loginHandler(res.data.token))
            dispatch(tokenAction.loginHandler({
                token :res.data.token,
                email : res.data.email
             }))

            if(res.data.token){
                history.push('/home')
            }
            console.log(res.data)

        }catch(err){
            console.log(err)
        }
    }
    const switchAuthModeHandler = ()=>{
        setIsLogin((prevState) => !prevState)

    }

    return<>
     <section className={classes.auth}>
        {console.log('sin')}
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={isLogin ? submiLogIntHandler : submiSinuptHandler}>
            {/* <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={enteredNameRef} required />
            </div> */}
            <div className={classes.control}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' ref={enteredEmailRef} required />
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Your Password</label>
                <input
                    type='password'
                    id='password'
                    ref={enteredPasswordRef}
                    required
                />
                {!isLogin && <div className={classes.control}>
                    <label htmlFor='password'>Confirm Your Password</label>
                    <input
                        type='password'
                        id='confirmpassword'
                        ref={enteredConfirmPasswordRef}
                        required
                    />
                </div>}
            </div>

            {!isLodding && <button type='submit'>Submit</button>}
            {isLodding && <p>Loading...</p>}

            <div className={classes.actions}>
            <Link to = '/forget-password'><p className={classes.paragrah}>Forget Password</p></Link>
            </div>

            <div className={classes.actions}>
                <button
                    type='button'
                    className={classes.toggle}
                    onClick={switchAuthModeHandler}
                >
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </div>

        </form>
    </section>
    </>
}

export default SinUp