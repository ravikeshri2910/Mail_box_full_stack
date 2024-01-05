import React from "react";

import classes from './Dashbord.module.css'
import DashbordData from "./DashbordData";

const d = [
    {
        id: 'p1',
        to: 'rarara',
        subject: 'dcbdhcbschcbchbc',
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

    const mail = d.map((mail) => {
        return (
            <DashbordData 
            key = {mail.id}
            to = {mail.to}
            subject = {mail.subject}
            />
        )
    })

    return <div>
        {mail}
    </div>
}

export default Dashbord