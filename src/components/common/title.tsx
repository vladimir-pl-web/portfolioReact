import React from 'react'
import classes from './title.module.scss'
type TitlePropsType = {
  label: string;
  type?: string
};
const Title: React.FC<TitlePropsType> = ({ label, type }) => {
  let typeofTitle = type && type === 'small' && classes.TitleSmall
  return <h1 className={classes.Title + ' ' + typeofTitle}>{label}</h1>;
};

export default Title