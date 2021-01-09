import classes from './skills.module.scss'
import React from 'react'
import { loremIpsum } from 'lorem-ipsum';
import SkillItem from './skillItem/skillItem';

  function importAllImages(r: any) {
    return r.keys().map(r);
  }

  export const getImageUrl = (i: number, src: string): string => {
    const images = importAllImages(
      require.context("../../assets/img", false, /\.(png|jpe?g|svg)$/)
    );
    return images[i].default;
};
  
const Skills = () => {


  const skillList = [
    { name: "CSS", src: getImageUrl(0, 'img'), description: loremIpsum() },
    { name: "GIT", src: getImageUrl(1, 'img'), description: loremIpsum() },
    { name: "Gulp", src: getImageUrl(2, 'img'), description: loremIpsum() },
    { name: "HTML", src: getImageUrl(3, 'img'), description: loremIpsum() },
    { name: "JS", src: getImageUrl(4, 'img'), description: loremIpsum() },
    { name: "React", src: getImageUrl(5, 'img'), description: loremIpsum() },
    { name: "Redux", src: getImageUrl(6, 'img'), description: loremIpsum() },
    { name: "Sass", src: getImageUrl(7, 'img'), description: loremIpsum() },
    { name: "Storybook", src: getImageUrl(8, 'img'), description: loremIpsum() },
    { name: "Typescript", src: getImageUrl(9, 'img'), description: loremIpsum() },
    { name: "Webpack", src: getImageUrl(10, 'img'), description: loremIpsum() },
  ].map(({name, src, description}) => {
    return (
      <SkillItem
      key={name}
        src={src}
        name={name}
        description={description}
      />
    )
  })
  
  return (
    <div className={classes.skills}>
      <div className={classes.skiilsContainer}>

        <h2>My Skills</h2>
        <ul className={classes.skillList}>
          {skillList}
        </ul>
      </div>
    </div>
  );
}

export default Skills