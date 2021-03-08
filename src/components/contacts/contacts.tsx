import React from "react";
import { Parallax } from "react-parallax";
import classes from "./contacts.module.scss";
import view from "../../assets/bg/view.jpg";
import Form from "./form/form";
import Title from "../common/title/title";
import Messengers from "../common/messengers/messengers";
import { RootStateType } from "../../redux/store";
import { formStateType } from "../../redux/reducers/form";
import { useSelector } from "react-redux";

const Contacts = () => {
const formInfo = useSelector<RootStateType, formStateType>((state) => state.formSend)
let info = formInfo.error || formInfo.success || formInfo.sending ? true : false
  let err = formInfo.error && classes.error
  let message
  if (formInfo.success) { message = 'Message has been sent' }
  if(formInfo.error) {message = 'An error appeared. Try other way to get in tough'}
 if(formInfo.sending) {message = "Sending..."}
  return (
    <section style={{ background: "black" }}>
      <Parallax
        bgImage={view}
        strength={300}
        className={classes.ContactsParallax}
      >
        <div className={classes.ContactsContainer}>
          <Title label={"Call me"} type={"small"} />
          {info && <div className={classes.message + ' ' + err}>{ message}</div>}
          <Form />
          <Messengers />
        </div>
      </Parallax>
    </section>
  );
};
export default Contacts;


