import { useFormik } from 'formik';
import React from 'react'
import Button from '../../common/button/button';
import classes from './form.module.scss'

type FormikErrorType = {
  email?: string;
  name?: string;
  phone?: string;
  message?: string;
};



const Form = () => {
const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    phone: "",
    message: ""
  },
  validate: (values) => {
    const errors: FormikErrorType = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.name) {
      errors.name = "The name is required";
    }
       else  if (values.name.length > 40) {
           errors.name = "Name must be less than 30 characters";
         }
    if (values.message.length > 300) {
      errors.message = 'Please, not more than 300 characters'
    }
    if (!values.phone) {
      errors.phone = "The phone number is required";
    }
   else if (!/^(\+|\d)[0-9]{7,16}$/i.test(values.phone)) {
      errors.phone = "Seems this is the wrong phone number.";
    } 
    return errors;
  },
  onSubmit: (values) => {
    alert(JSON.stringify(values));
    formik.resetForm()
  },
});

  
  return (
    <form onSubmit={formik.handleSubmit} className={classes.Form}>
      <div className={classes.InputWrap}>
        <label htmlFor="name" className={classes.Label}>
          Name
        </label>
        <input
          type="text"
          placeholder="type your name"
          className={classes.Input}
          {...formik.getFieldProps("name")}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <ErrorMessage message={formik.errors.name} />
        ) : null}
      </div>
      <div className={classes.InputWrap}>
        <label htmlFor="email" className={classes.Label}>
          Email
        </label>
        <input
          type="email"
          placeholder="type your email"
          {...formik.getFieldProps("email")}
          className={classes.Input}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <ErrorMessage message={formik.errors.email} />
        ) : null}
      </div>
      <div className={classes.InputWrap}>
        <label htmlFor="phone" className={classes.Label}>
          Phone
        </label>
        <input
          type="tel"
          placeholder="type your phone"
          {...formik.getFieldProps("phone")}
          className={classes.Input}
          onBlur={formik.handleBlur}
        />
        {formik.errors.phone && formik.touched.phone ? (
          <ErrorMessage message={formik.errors.phone} />
        ) : null}
      </div>
      <div className={classes.InputWrap}>
        <label htmlFor="message" className={classes.Label}>
          Message
        </label>
        <textarea
          placeholder="type your message"
          {...formik.getFieldProps("message")}
          className={classes.Textarea}
          onBlur={formik.handleBlur}
        />
        {formik.errors.message && formik.touched.message ? (
          <ErrorMessage message={formik.errors.message} />
        ) : null}
      </div>
      <div className={classes.FormButtons}>
        <Button
          name="Send"
          iconCode="📬"
          to="/contacts"
          type="submit"
          onClick={formik.handleSubmit}
        />
        <Button
          name="Clear"
          iconCode="🚮"
          to="/contacts"
          type="clear"
          onClick={formik.resetForm}
        />
      </div>
    </form>
  );
};

const ErrorMessage:React.FC<{message:string | undefined}> = ({message}) => {
  return (
    <div className={classes.ErrorMsg}>{message}</div>
  )
}

export default Form