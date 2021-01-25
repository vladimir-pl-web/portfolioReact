import { loremIpsum } from 'lorem-ipsum';
import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax';
import { useDispatch, useSelector } from 'react-redux';
import { loadWorks } from '../../redux/actions/works';
import { RootStateType } from '../../redux/store';
import Title from '../common/title';
import classes from './works.module.scss'
import space from "../../assets/photos/night4.jpg";
import WorksItem, { WorksItemPropsType } from './worksItem/worksItem';

  function importAllImages(r: any) {
    return r.keys().map(r);
  }

  export const getImage = (i: number, src: string): string => {
    const images = importAllImages(
      require.context(`../../assets/photos`, false, /\.(png|jpe?g|svg)$/)
    );
    return images[i].default;
};
const Works = () => {
  const worksArray = [
    { technologies: "CSS", src:getImage(1,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "GIT", src:getImage(2,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Gulp", src:getImage(3,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "HTML", src:getImage(4,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "JS", src:getImage(5,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "React", src:getImage(6,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Redux", src:getImage(7,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Sass", src:getImage(8,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Storybook", src:getImage(9,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com', },
    { technologies: "Typescript", src:getImage(10,'photos'), description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
    { technologies: "Webpack", src:getImage(11,'photos') , description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
        { technologies: "Webpack", src:getImage(12,'photos') , description: 'What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.', active: false, webUrl: 'www.google.com', gitUrl: 'www.github.com' },
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
    <section>
      <Parallax
        bgImage={space}
        strength={300}
        className={classes.WorksParallax}
      >
        <div className={classes.worksContainer}>
          <Title label={"Thats what I can do for you"} type={"small"} />
          <ul className={classes.WorksList}>{worksCurrentList}</ul>
        </div>
      </Parallax>
    </section>
  );
}
export default Works