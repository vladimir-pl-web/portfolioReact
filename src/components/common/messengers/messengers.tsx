import React from 'react'
import phone from '../../../assets/icons/phone.svg';
import skype from "../../../assets/icons/skype.svg";
import whatsapp from "../../../assets/icons/whatsapp.svg";
import telegram from "../../../assets/icons/telegram.svg";
import classes from './messengers.module.scss'

const Messengers = () => {
  const contactsArr = [
    { src: phone, label: "12345678904" },
    { src: skype, label: "123456789098" },
    { src: whatsapp, label: "123456789098" },
    { src: telegram, label: "123456789098" },
  ].map((el) => {
    return (
      <li key = {el.label} className={classes.MsgItem}>
        <img src={el.src} alt={el.label} className={classes.MsglLogo}/>
        <span className={classes.MsgText}>{ el.label}</span>
      </li>
    )
  })
  return (
    <ul className={classes.Messengers}>
      {contactsArr}
    </ul>
  );
}
export default Messengers