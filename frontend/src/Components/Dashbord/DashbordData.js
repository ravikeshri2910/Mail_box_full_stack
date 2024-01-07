import React from "react";

import classes from './DashbordData.module.css'
import { useDispatch, useSelector } from "react-redux";
import { stateAction } from "../../Store/StateContext";
import axios from "axios";

const DashbordData = (props) => {

    const isDeleteInbox = useSelector(state => state.stateReducer.isDeleteInbox)
    const isSent = useSelector(state => state.stateReducer.isSent)
    const dispatch = useDispatch()

    let tag;
    if (isDeleteInbox) {
        tag = 'From: '
    } else if (!isDeleteInbox) {
        tag = 'To: '
    }

    const inboxdeleteHandler = async () => {

        const id = props.id
        console.log('inbox')
        const token = localStorage.getItem('token')
        const res = await axios.delete(`http://localhost:8000/user/delete-inbox-data/${id}`, {
            headers: { "Authorization": token }
        })

        dispatch(stateAction.inboxHandler())
        console.log('res', res)
    }

    const sentDeleteHandler = async () => {
        const id = props.id
        console.log('sent')
        const token = localStorage.getItem('token')
        const res = await axios.delete(`http://localhost:8000/user/delete-sent-data/${id}`, {
            headers: { "Authorization": token }
        })

        dispatch(stateAction.sentHandler())
        console.log('res', res)
    }

    const openMailHandlerDashboard = () => {
        console.log(props.id)
        localStorage.setItem('id', props.id)
        dispatch(stateAction.openMailHandler())
    }


    return <div className={classes.cardData}>
        <div className={classes.unreadDiv}>
            {!props.unread && <p className={classes.unread}></p>}
        </div>
        <div className={classes.toDiv} onClick={openMailHandlerDashboard}> {tag}{isDeleteInbox ? props.from : props.to}</div>
        <div className={classes.subjectDiv} onClick={openMailHandlerDashboard}>Subject: {props.subject}</div>
        <div className={classes.deleteDiv} onClick={isDeleteInbox ? inboxdeleteHandler : sentDeleteHandler}>
            Delete
        </div>

    </div>
}

export default DashbordData