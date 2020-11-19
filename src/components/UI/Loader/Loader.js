import React from 'react';
import Classes from './Loader.module.css'

const Loader = props => (
    <div className={Classes.center}>
        <div className={Classes.Loader}><div></div><div></div></div>
    </div>
)

export default Loader
