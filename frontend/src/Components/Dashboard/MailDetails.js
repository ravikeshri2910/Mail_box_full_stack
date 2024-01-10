import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import classes from './MailDetail.module.css'
import axios from "axios";
import { useSelector } from "react-redux";

const MailDetail = (props) => {

    const isDeleteInbox = useSelector(state => state.stateReducer.isDeleteInbox)
    const [mailData, setMAilData] = useState([])

    const port = process.env.REACT_APP_PORT;

    // console.log('isDeleteInbox', isDeleteInbox)

    const getMailDataIndividual = async () => {

        // console.log('inbox mail')
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        const res = await axios.get(`http://${port}/user/mail/${id}`, {
            headers: { "Authorization": token }
        })

        // console.log('res', res)
        setMAilData(res.data.msg)
    }

    const openByreceiver = async () => {

        console.log('update')
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        const res = await axios.get(`http://${port}/user/mailopened/${id}`, {
            headers: { "Authorization": token }
        })
        console.log('update2')

        console.log('update' ,res)
    }

    useEffect(() => {
        getMailDataIndividual()
    }, [])

    useEffect(() => {
        if (isDeleteInbox) {
            getMailDataIndividual()
            openByreceiver()
        }
    }, [isDeleteInbox])



    return <>
        <Card className={classes.mailDetaildiv} style={{ width: '45rem' }}>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><b>{isDeleteInbox ? 'From: ' : 'To: '}{isDeleteInbox ? mailData.sender : mailData.receiver}</b></ListGroup.Item>
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
