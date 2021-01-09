import classes from './about.module.scss'
import React from 'react'
import Header from '../header/header';

 const About = () => {
  return (
    <div className={classes.about}>
      <Header/>
      <div className={classes.aboutContainer}>
        <div className={classes.info}>
          Hi!My name is Vladimir. I am looking for FRONT END DEVELOPER POSITION
        </div>
        <div className={classes.imgWrapper}>
          <img src = '' alt='me'/>
        </div>
        <div className={classes.hire}>
          <h2>Will consider all job offers, but distance job is more preferable</h2>
          <button>Hire me!</button>
        </div>
      </div>
    </div>
  );
}
export default About