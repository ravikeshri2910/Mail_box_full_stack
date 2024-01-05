import React, { useState } from 'react';
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
   
  };
  const sentHandler = (buttonName) => {
    setActiveButton(buttonName);
 
  };

  return (<>
    {model && <Model/>}
    <div className={classes.sideBar}>
      <div className={classes.btn}>
        <Button
          variant="info"
          className={activeButton === 'Compose Email' ? classes.active : ''}
          onClick={() => composeEmailHandler()}
        >
          Compose Email
        </Button>
      </div>
      <div className={classes.btn}>
        <Button
          variant="info"
          className={activeButton === 'Inbox' ? classes.active : ''}
          onClick={() => inboxHandler('Inbox')}
        >
          Inbox
        </Button>
      </div>
      <div className={classes.btn}>
        <Button
          variant="info"
          className={activeButton === 'Sent' ? classes.active : ''}
          onClick={() => sentHandler('Sent')}
        >
          Sent
        </Button>
      </div>
    </div>
    </>
  );
};

export default SideBar;
