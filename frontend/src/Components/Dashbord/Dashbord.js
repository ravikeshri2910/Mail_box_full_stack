import React, { useEffect, useState } from "react";

import classes from './Dashbord.module.css'
import DashbordData from "./DashbordData";
import { useDispatch, useSelector } from "react-redux";
import { stateAction } from "../../Store/StateContext";
import axios from "axios";

const d = [
    {
        id: 'p1',
        to: 'rarjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjara',
        subject:'dcbdhcbschhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhcbc',
    },
    {
        id: 'p2',
        to: 'rarara',
        subject: 'dcbdhcbschcbchbc',
    },
    {
        id: 'p3',
        to: 'rarara',
        subject: 'dcbdhcbschcbchbc',
    },
]
const Dashbord = (props) => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const isInbox = useSelector(state => state.stateReducer.isInbox)
    const isSent = useSelector(state => state.stateReducer.isSent)
    const [mailData , setMAilData] = useState([])

    const inboxData = async() =>{

        const token = localStorage.getItem('token')

        setIsLoading(true)
        const res = await axios.get("http://localhost:8000/user/inbox-data",{
            headers : {"Authorization" : token}
        })

        
        console.log('res', res.data.msg)
        dispatch(stateAction.inboxHandlerFalse())
        const data = res.data.msg
        if(data){
            setIsLoading(false)
        }
        setMAilData(data)
    }


    const sentData = async() =>{

        const token = localStorage.getItem('token')

        const res = await axios.get("http://localhost:8000/user/sent-data",{
            headers : {"Authorization" : token}
        })
        console.log('res', res)
        dispatch(stateAction.inboxHandlerFalse())
        const data = res.data.msg
        setMAilData(data)
    }

    useEffect(()=>{
        if(isInbox){
            inboxData()
        }
    },[isInbox])

    useEffect(()=>{
        if(isSent){
            sentData()
        }
    },[isSent])

    const mail = mailData.map((mail) => {
        return (
            <DashbordData 
            key = {mail.id}
            id = {mail.id}
            to = {mail.to}
            from = {mail.from}
            subject = {mail.subject}
            />
        )
    })

    return <div>
       {isLoading && <p>Loading...</p>}
        {!isLoading && mail}
    </div>
}

export default Dashbord