import React from 'react';
import Classes from './Backdrop.module.css'

const Backdrop = props => <div className={Classes.Backdrop} onClick={props.onClick} />


export default Backdrop