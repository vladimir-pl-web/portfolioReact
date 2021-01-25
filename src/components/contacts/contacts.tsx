import React from 'react'
import { Parallax } from 'react-parallax'
import classes from './contacts.module.scss'
import view from '../../assets/bg/view.jpg'
import Form, { FormDataType } from './form/form'
import Title from '../common/title/title'
import Messengers from '../common/messengers/messengers'

const Contacts = () => {

  const onFormHandler = (data: FormDataType) => {
    console.log(data);
    
  }
  return (
    <section>
      <Parallax bgImage={view} strength={300} className={classes.ContactsParallax}>
        <div className={classes.ContactsContainer}>
          <Title label={"Call me"} type={"small"} />
          <Form onSubmit={onFormHandler} />
          <Messengers />
        </div>
      </Parallax>
    </section>
  );
}
export default Contacts