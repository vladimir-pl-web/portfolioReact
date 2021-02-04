import React from 'react'
import { useDispatch } from 'react-redux';
import { watchDescription } from '../../../redux/actions/works';
import Button from '../../common/button/button';
import classes from './worksItem.module.scss'

export type WorksItemPropsType = {
  id:number
  src: string
  webUrl: string
  gitUrl: string
  description: string
  active: boolean
}
const WorksItem: React.FC<WorksItemPropsType> = ({ src, webUrl, gitUrl, description, active, id }) => {
  const dispatch = useDispatch()
  const descrHandler = (name: string, workId: number) => {
    
    name === "More" && dispatch(watchDescription(workId, true))
    name === "Less" && dispatch(watchDescription(workId,false));
  }

  let common = description.slice(0, 140);
  let rest = description.slice(140)

  let expanded = active ?  rest  : ' ... '
  let isMore = active ? 'Less' : 'More'
  let isActiveClass = active && classes.active
  let more = <span className={classes.More} onClick={()=>descrHandler(isMore, id)}>{isMore}</span>;

  return (
    <div className={classes.worksItem}>
      <img src={src} alt="page preview" className={classes.Image} />
      <div className={classes.Description + " " + isActiveClass}>
        {`${common}${expanded}`}
        {more}
      </div>
      <div className={classes.ItemOverlay}>
        <div className={classes.ButtonsWorks}>
          <Button name={"url"} to={webUrl} iconCode={"🔗 "} type={"url"} />
          <Button name={"code"} to={gitUrl} iconCode={"💻"} type={"git"} />
        </div>
        <div className={classes.Follow}>
          <h4 className={classes.Web}>Click "URL" to see the app</h4>
          <h5 className={classes.Git}>Click "CODE" to see github</h5>
          <h5 className={classes.Git}>Or "More" to see additional info</h5>
        </div>
      </div>
    </div>
  );
}
export default WorksItem