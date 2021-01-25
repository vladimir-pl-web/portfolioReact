import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import Button from '../../common/button/button';
import classes from './form.module.scss'


export type FormDataType = {
  name: string
  email: string
  phone: string
  message: string
}
const AddMessage: React.FC<InjectedFormProps<FormDataType>> = ({
  handleSubmit,
  reset,
}) => {
  console.log(reset);
  
  return (
    <form className={classes.Form} onSubmit={handleSubmit}>
      <div className={classes.InputWrap}>
        <label htmlFor="name" className={classes.Label}>
          Name
        </label>
        <Field
          type="text"
          placeholder="type your name"
          component={"input"}
          name={"name"}
          className={classes.Input}
        />
      </div>
      <div className={classes.InputWrap}>
        <label htmlFor="email" className={classes.Label}>
          Email
        </label>
        <Field
          type="email"
          placeholder="type your email"
          component={"input"}
          name={"email"}
          className={classes.Input}
        />
      </div>
      <div className={classes.InputWrap}>
        <label htmlFor="phone" className={classes.Label}>
          Phone
        </label>
        <Field
          type="tel"
          placeholder="type your phone"
          component={"input"}
          name={"phone"}
          className={classes.Input}
        />
      </div>
      <div className={classes.InputWrap}>
        <label htmlFor="message" className={classes.Label}>
          Message
        </label>
        <Field
          placeholder="type your message"
          component={"textarea"}
          name={"message"}
          className={classes.Textarea}
        />
      </div>
      <div className={classes.FormButtons}>
        <Button name="Send" iconCode="📬" to="/contacts" type="send" />
        <Button name="Clear" iconCode="🚮" to="/contacts" type="clear" onClick={reset}/>
      </div>
    </form>
  );
};
const Form = reduxForm<FormDataType>({
  form: "messageForm",
})(AddMessage);

export default Form