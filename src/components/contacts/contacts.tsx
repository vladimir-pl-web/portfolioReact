import React from 'react'
import classes from './contacts.module.scss'
import Form from './form/form'

const Contacts = () => {
  return (
    <div className={classes.Contacts}>
      <h2>Contacts</h2>
      <div className= {classes.ContactsContainer}>
        <Form />
      </div>
      <footer className={classes.Footer}>
        <div className={classes.FooterContainer}>
          <address className={classes.Address}> 
            <div>Phone</div>
            <div>email</div>
            <div>Skype</div>
            <div>WatsUp</div>
          </address>
        </div>
      </footer>
    </div>
  )
}
export default Contacts