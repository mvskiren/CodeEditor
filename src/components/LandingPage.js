import React from 'react'
import Logoo from './logoo.svg';
import classes from './LandingPage.module.css';
export default function LandingPage() {
    return (
        <div className={classes.cover}>
        <h1 className={classes.intro}> &lt; 2020 CodeEditor/&gt; </h1>
        <img className={classes.image} src={Logoo} alt="Codeeditor" />
        </div>

    )
}
