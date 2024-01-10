// Ui/Model.js
import React from 'react';

import classes from './SuspenseModel.module.css'

const SuspenseModel = ({ handleClose }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <span className={classes.close} onClick={handleClose}>&times;</span>
        <h2>Modal Header</h2>
        <p>This is the content of the modal.</p>
      </div>
    </div>
  );
};

export default SuspenseModel;
