import React from 'react'
import classes from './button.module.scss'
import {Link} from 'react-router-dom'


export type ButtonType = {
  name: string
  active: boolean
  to: string
  iconCode: string
}
const Button: React.FC<ButtonType> = ({ name, active, to, iconCode }) => {

  return (
    <div className={classes.Button}>
      <Link to={to} data-front={name} data-back={iconCode}></Link>
    </div>
  );
}
export default Button