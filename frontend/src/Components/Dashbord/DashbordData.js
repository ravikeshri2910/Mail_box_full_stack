import React from "react";
import Card from 'react-bootstrap/Card';

import classes from './DashbordData.module.css'

const DashbordData = (props) => {
    return <div className={classes.cardData}>
      
            <div className={classes.toDiv}> To: {props.to}</div>
            <div  className={classes.subjectDiv}>Subject: {props.subject}</div>
            <div className={classes.deleteDiv}>
                Delete
            </div>
      
    </div>
}

export default DashbordData