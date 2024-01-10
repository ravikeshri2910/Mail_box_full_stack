
import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import classes from './sideBar.module.css';
import { stateAction } from '../../Store/StateContext';
import { useDispatch, useSelector } from 'react-redux';
import Model from '../../UI/Model';

// Lazy-loading the Model component

const SideBar = (props) => {
  const dispatch = useDispatch();
  const model = useSelector((state) => state.stateReducer.isModel);

  const [activeButton, setActiveButton] = useState(null);

  const composeEmailHandler = useCallback(() => {
    dispatch(stateAction.modelHandler());
  }, [dispatch]);

  const inboxHandler = useCallback((buttonName) => {
    setActiveButton(buttonName);
    dispatch(stateAction.inboxHandler());
  }, [dispatch]);

  useEffect(() => {
    inboxHandler('Inbox');
  }, [inboxHandler]);

  const sentHandler = useCallback((buttonName) => {
    setActiveButton(buttonName);
    dispatch(stateAction.sentHandler());
  }, [dispatch]);

  return (
    <>
     
     
      {model && <Model />}
      <div className={classes.sideBar}>
        {console.log("sidebar")}
        <div className={classes.composeBtn}>
          <Button
            variant="info"
            className={activeButton === 'Compose Email' ? classes.active : ''}
            onClick={composeEmailHandler}
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

