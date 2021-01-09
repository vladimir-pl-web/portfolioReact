import React from 'react'
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
      <div className={classes.worksPreview}>
        <img src={src} alt="page preview" />
      </div>
      <div>{technologies}</div>
      <div>
        <button>
          <a href={webUrl}>WEB</a>
        </button>
        <button>
          <a href={gitUrl}>GITHUB</a>
        </button>
      </div>
    </li>
  );
}
export default WorksItem