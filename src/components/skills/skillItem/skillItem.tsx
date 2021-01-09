import classes from './skillItem.module.scss'
import React from 'react'

type ItemPropsType = {
  name: string
  src: string
  description: string
}
const SkillItem:React.FC<ItemPropsType> = ({name, src, description}) => {

  return (
    <li className={classes.skillItem}>
      <img src={src} alt={src}/>
      <h4>{name}</h4>
      <div>{description}</div>
    </li>
  )
}

export default SkillItem