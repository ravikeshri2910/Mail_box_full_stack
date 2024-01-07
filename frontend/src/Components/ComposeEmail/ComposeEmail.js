
import React, { useRef, useState } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from './ComposeEmail.module.css';
import { Button } from "react-bootstrap";
import { stateAction } from "../../Store/StateContext";
import { useDispatch } from "react-redux";
import axios from 'axios'

const ComposeEmail = () => {

    const dispatch = useDispatch();
    const toRef = useRef();
    const subjectRef = useRef();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const closeBtnHandler = () => {
        dispatch(stateAction.modelHandler());
    };

    const logEditorContent = async() => {
        const contentState = editorState.getCurrentContent();
        const editorText = contentState.getPlainText();
        const raw = convertToRaw(editorState.getCurrentContent());

        // const to = toRef.current.value;
        // const subject = subjectRef.current.value;

        // console.log('Editor Text:', editorText);
        // console.log('To:', to);
        // console.log('Subject:', subject);

        const obj = {
            to : toRef.current.value,
            subject : subjectRef.current.value,
            body : editorText
        }

        const token = localStorage.getItem('token')

        const res = await axios.post("http://localhost:8000/user/sent",obj,{
            headers : {"Authorization" : token}
        })

        // console.log(res)

        // Clear the editor's content
        toRef.current.value=''
        subjectRef.current.value=''
        setEditorState(EditorState.createEmpty());
        dispatch(stateAction.modelHandler());
    };

    const onEditorStateChange = (editorState) => {
        // Handle editor state changes if needed
    };

    return (<div className={classes.backdrop}>
        <div className={classes.ComposeBox}>
            <div className={classes.head}>
                <span className={classes.ComposeTittle}>Compose</span>
                <span className={classes.closeBtn} onClick={closeBtnHandler}>&times;</span>
            </div>

            <input type="text" ref={toRef} placeholder="To"></input><br /><hr />

            <input type="text" ref={subjectRef} placeholder="Subject"></input><hr />
            <div className={classes.textArea}>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName={classes.editorClassName}
                    onEditorStateChange={setEditorState}
                />
            </div>
            <div className={classes.sentBtn}>
                <Button variant="info" onClick={logEditorContent}>Send</Button>
            </div>
        </div>
    </div>
    );
};

export default ComposeEmail;
