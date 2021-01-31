
import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax';
import { useDispatch, useSelector } from 'react-redux';
import { loadWorks } from '../../redux/actions/works';
import { RootStateType } from '../../redux/store';
import Title from '../common/title/title';
import classes from './works.module.scss'
import space from "../../assets/bg/night4.jpg";
import WorksItem, { WorksItemPropsType } from './worksItem/worksItem';

  function importAllImages(r: any) {
    return r.keys().map(r);
  }

export const getImageUrl = (i: number, src: string): string => {
  let arg
  if (src === 'photos') {arg =  require.context(`../../assets/photos`, false, /\.(png|jpe?g|svg)$/)}
  if (src === "img") { arg = require.context(`../../assets/img`, false, /\.(png|jpe?g|svg)$/)}
  if (src === "icons") {arg = require.context(`../../assets/icons`, false, /\.(png|jpe?g|svg)$/)}
    const images = importAllImages(arg);
    return images[i].default;
};


const Works = () => {
  const worksArray = [
    {
      id: 1,
      src: getImageUrl(0, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
    {
      id: 2,
      src: getImageUrl(1, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentationWhat is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
    {
      id: 3,
      src: getImageUrl(2, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
    {
      id: 4,
      src: getImageUrl(3, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
    {
      id: 5,
      src: getImageUrl(4, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
    {
      id: 6,
      src: getImageUrl(5, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
    {
      id: 7,
      src: getImageUrl(6, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
    {
      id: 8,
      src: getImageUrl(7, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. ",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
    {
      id: 9,
      src: getImageUrl(8, "photos"),
      description:
        "What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. What is the expected behavior? The expected behavior is an absence of error. I have read the documentation and did everything as was wrote in the documentation.",
      active: false,
      webUrl: "https://www.google.com",
      gitUrl: "https://github.com",
    },
  ];
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadWorks(worksArray));
  },[])

  const worksCurrentList = useSelector<RootStateType, Array<WorksItemPropsType>>(state => state.works.works)  
    .map(({ src, webUrl, gitUrl, description, active, id }) => {
      return (
        <WorksItem
          key={src}
          src={src}
          webUrl={webUrl}
          gitUrl={gitUrl}
          id={id}
          description={description}
          active={active}
        />
      )
        })
  return (
    <section style={{ background: "black" }}>
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