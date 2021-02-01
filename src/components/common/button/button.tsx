/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import classes from './button.module.scss'
import {Link} from 'react-router-dom'


export type ButtonType = {
  name: string
  active?: boolean
  to: string
  type?: string
  iconCode: string
  onClick?: ()=>void
}
const Button: React.FC<ButtonType> = ({ name, active, to, iconCode, type, onClick }) => {

const btnTypes = [classes.Button];
  type && btnTypes.push(classes[type])
  active && btnTypes.push(classes.activeBtn)
  const clickHandler = () => {
    onClick && onClick()
  }
  
  let btnLink =
    type && type !=='clear' && type !== 'submit' ? (
      <a target="_blank" href={to} data-front={name} data-back={iconCode}></a>
    ) : (
      <Link to={to} data-front={name} data-back={iconCode}></Link>
    );

  return (
    <div className={btnTypes.join(" ")} onClick={clickHandler}>
      {btnLink}
    </div>
  );
}
export default Button