import React from 'react'
import classes from './form.module.scss'

const Form = () => {
  return (
    <form className={classes.Form}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="type your name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="type your email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="tel" placeholder="type your phone" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea placeholder="type your message" />
      </div>
      <div className={classes.FormButtons}>
        <button>send</button>
        <button>clear</button>
      </div>
    </form>
  );
}
export default Form