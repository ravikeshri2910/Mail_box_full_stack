import React from "react";
import  ReactDOM  from "react-dom";

import ComposeEmail from "../Components/ComposeEmail/ComposeEmail";


const Model = (props) =>{

    const overLay = document.getElementById('overlay');

    return (
        <>
        {ReactDOM.createPortal(<ComposeEmail onClickClose= {props.onClose}/> , overLay)}
        </>
    )
}

export default Model