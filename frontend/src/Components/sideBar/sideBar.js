import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import classes from './sideBar.module.css';
import { stateAction } from '../../Store/StateContext';
import { useDispatch, useSelector } from 'react-redux';
import Model from '../../Ui/Model';

const SideBar = (props) => {

  const dispatch = useDispatch()
  const model = useSelector(state => state.stateReducer.isModel)

  const [activeButton, setActiveButton] = useState(null);

  const composeEmailHandler = (buttonName) => {
    dispatch(stateAction.modelHandler())
  };
  const inboxHandler = (buttonName) => {
    setActiveButton(buttonName);
    dispatch(stateAction.inboxHandler())
  };

  useEffect(()=>{
    inboxHandler('Inbox')
  },[])
  
  const sentHandler = (buttonName) => {
   setActiveButton(buttonName);
    dispatch(stateAction.sentHandler())

  };

  return (<>
    {model && <Model/>}
    <div className={classes.sideBar}>
      <div className={classes.composeBtn}>
        <Button
          variant="info"
          className={activeButton === 'Compose Email' ? classes.active : ''}
          onClick={() => composeEmailHandler()}
        >
          <b>Compose Email</b>
        </Button>
      </div>
      <div className={classes.btn}>
        <button
          variant="info"
          className={activeButton === 'Inbox' ? classes.active : ''}
          onClick={() => inboxHandler('Inbox')}
        >
          Inbox
        </button>
      </div>
      <div className={classes.btn}>
        <button
          variant="info"
          className={activeButton === 'Sent' ? classes.active : ''}
          onClick={() => sentHandler('Sent')}
        >
          Sent
        </button>
      </div>
    </div>
    </>
  );
};

export default SideBar;
