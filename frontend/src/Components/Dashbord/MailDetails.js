import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import classes from './MailDetail.module.css'
import axios from "axios";
import { useSelector } from "react-redux";

const MailDetail = (props) => {

    const isDeleteInbox = useSelector(state => state.stateReducer.isDeleteInbox)
    const [mailData, setMAilData] = useState([])

    console.log('isDeleteInbox', isDeleteInbox)

    const getSentMailDataIndividual = async () => {

        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        const res = await axios.get(`http://localhost:8000/user/get-sentMail-data/${id}`, {
            headers: { "Authorization": token }
        })

        setMAilData(res.data.msg)
        console.log(res.data.msg)
    }

    const getInboxMailDataIndividual = async () => {

        console.log('inbox mail')
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        const res = await axios.get(`http://localhost:8000/user/get-inboxMail-data/${id}`, {
            headers: { "Authorization": token }
        })

        console.log('res' , res)
        setMAilData(res.data.msg)
    }

    useEffect(() => {
        if (isDeleteInbox ===true) {
            getInboxMailDataIndividual()
        }else if(isDeleteInbox===false){
            getSentMailDataIndividual()
        }
    }, [isDeleteInbox])


    return <>
        <Card className={classes.mailDetaildiv} style={{ width: '45rem' }}>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><b>{isDeleteInbox ? 'From: ' : 'To: '}{isDeleteInbox ? mailData.from : mailData.to}</b></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Title>Subject: {mailData.subject}</Card.Title>
                <Card.Text>
                    {mailData.body}.
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

export default MailDetail
