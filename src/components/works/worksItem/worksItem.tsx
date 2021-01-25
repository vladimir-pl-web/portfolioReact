import React from 'react'
import Button from '../../button/button';
import classes from './worksItem.module.scss'

export type WorksItemPropsType = {
  src: string
  webUrl: string
  gitUrl: string
  technologies: string
  description: string
  active: boolean
}
const WorksItem:React.FC<WorksItemPropsType> = ({src, webUrl, gitUrl, technologies, description, active}) => {
  return (
    <li className={classes.worksItem}>
      <img src={src} alt="page preview" className={classes.Image} />
      <div className={classes.Description}>{description}</div>
      <div className={classes.ItemOverlay}>
        <div className={classes.ButtonsWorks}>
          <Button name={"url"} to={webUrl} iconCode={"🔗 "} type={"url"} />
          <Button name={"code"} to={gitUrl} iconCode={"💻"} type={"git"} />
        </div>
        <div className={classes.Follow}>
          <h4 className={classes.Web}>Click "WEB" to see the app</h4>
          <h5 className={classes.Git}>Click "CODE" to see github</h5>
          <h5 className={classes.Git}>Or scroll down to see more</h5>
        </div>
      </div>
    </li>
  );
}
export default WorksItem