import React from 'react'

import classes from './messengers.module.scss'
import { getImageUrl } from '../../works/works';

const Messengers = () => {
   
  const contactsArr = [
    { name: "phone", src: getImageUrl(0, "icons"), label: "+371 26273354" },
    { name: "skype", src: getImageUrl(1, "icons"), label: "Vlad P" },
    { name: "telegram", src: getImageUrl(2, "icons"), label: "@VladimirPl371" },
    { name: "whatsapp", src: getImageUrl(3, "icons"), label: "371 26273354" },
  ].map((el) => {
    let number;

    switch (el.name) {
      case "phone":
        number = "tel:+37126273354";
        break;
      case "skype":
        number = "skype:Vlad P";
        break;
      case "telegram":
        number = "tg://resolve?domain=@VladimirPl371";
        break;
      case "watsaspp":
        number = "https://wa.me/37126273354";
        break;
      default:
        number = "tel:+37126273354";
        break;
    }

    return (
      <li key={el.label} className={classes.MsgItem}>
        <a href={number}>
          <img src={el.src} alt={el.label} className={classes.MsglLogo} />
          <span className={classes.MsgText}>{el.label}</span>
        </a>
      </li>
    );
  });

  return (
    <ul className={classes.Messengers}>
      {contactsArr}
    </ul>
  );
}
export default Messengers