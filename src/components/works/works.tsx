import { loremIpsum } from 'lorem-ipsum';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadWorks } from '../../redux/actions/works';
import { RootStateType } from '../../redux/store';
import { getImageUrl } from '../skills/skills';
import classes from './works.module.scss'
import WorksItem, { WorksItemPropsType } from './worksItem/worksItem';
import im from '../../assets/img/js.png'

const Works = () => {
  const worksArray = [
    { technologies: "CSS", src: getImageUrl(0, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "GIT", src: getImageUrl(1, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Gulp", src: getImageUrl(2, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "HTML", src: getImageUrl(3, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "JS", src: getImageUrl(4, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "React", src: getImageUrl(5, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Redux", src: getImageUrl(6, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Sass", src: getImageUrl(7, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Storybook", src: getImageUrl(8, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com', },
    { technologies: "Typescript", src: getImageUrl(9, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Webpack", src: getImageUrl(10, "img"), description: loremIpsum(), active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
  ];
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadWorks(worksArray));
  })

  const worksCurrentList = useSelector<RootStateType, Array<WorksItemPropsType>>(state => state.works.works)  
    .map(({ src, webUrl, gitUrl, technologies, description, active }) => {
      return (
        <WorksItem
          key={src}
          src={src}
          webUrl={webUrl}
          gitUrl={gitUrl}
          technologies={technologies}
          description={description}
          active={active}
        />
      )
        })
  return (
    <div className={classes.works}>
      <h2>My Works</h2>
      <div className={classes.worksContainer}>
        <div className={classes.worksContent}>
          <div className={classes.worksHeaders}>
            <h4>Technologies used</h4>
            <h4>See web page</h4>
            <h4>See the code</h4>
          </div>
          <ul className={classes.worksList}>{worksCurrentList}</ul>
        </div>
        <div className={classes.worksInfo}>
          <img src={im} alt="js" />
          <div> Short project's description</div>
        </div>
      </div>
    </div>
  );
}
export default Works