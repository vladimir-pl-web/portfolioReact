import classes from './about.module.scss'
import React from 'react'
import particles from './particles.json'
import m from '../../assets/photos/metalica.jpg'
import Particles from "react-tsparticles";
import Title from '../common/title';


const About = () => {
  return (
    <>
      <Particles className={classes.Particles} options={particles} />
      <section className={classes.about}>
        <div className={classes.aboutContainer}>
          <div className={classes.info}>
            
            <h2 className={classes.Name}>My name is Vladimir.</h2>
            <div className={classes.Usefull}>
              <Title label={'Hi There!'}/>
              I'm <span> REACT FRONT END DEVELOPER</span>
            </div>
            <div className={classes.Consider}>
              Will consider all job offers, but remote work is more preferable
            </div>
          </div>
          <div className={classes.imgWrapper}>
            <img src={m} alt="me" />
          </div>
        </div>
      </section>
    </>
  );
}
export default About




       
