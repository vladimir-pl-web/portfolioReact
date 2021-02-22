
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
        "Organizer. You can handle your tasks as you want. Add, delete tasks and task lists, change names, statuses, sort tasks and so on. The app is fully synchronized with back-and. Following technologies were used: React(hooks), Redux(Redux toolkit), Type script, Material UI, REST api, Thunks, Unit tests(other branch)",
      active: false,
      webUrl: "https://VovanVovanic.github.io/organizer",
      gitUrl: "https://github.com/VovanVovanic/organizer",
    },
    {
      id: 2,
      src: getImageUrl(1, "photos"),
      description:
        "An app provides visual info about Star wars Universe. You can switch between ships, characters and planets, find out tne information and photo(if provided by server)of specific item. The App was created with React(hooks), Redux, REST api(Thunks), Typescript, Bootstrap",
      active: false,
      webUrl: "https://VovanVovanic.github.io/starwars-database",
      gitUrl: "https://github.com/VovanVovanic/starwars-database",
    },
    {
      id: 3,
      src: getImageUrl(2, "photos"),
      description:
        "This is the social network. The app development still in progress, however it's already synchronized with server and provides loginization, registration, follow/unfollow users, adding messages. Live chat and some other features will be done at the nearest time. The app is build with React(hooks and class components), Redux, Typescript, Redux Thunks, Ant Design",
      active: false,
      webUrl: "https://VovanVovanic.github.io/typeScriptReactSocialNet",
      gitUrl: "https://github.com/VovanVovanic/typeScriptReactSocialNet",
    },
    {
      id: 4,
      src: getImageUrl(3, "photos"),
      description:
        "A quiz app. You can add quizzes, answer questions, and see your progress. Synchronized with back end(Firebase). Created with React(class components) Redux, Thunks, SCSS",
      active: false,
      webUrl: "https://VovanVovanic.github.io/react-quiz-list-learning",
      gitUrl: "https://github.com/VovanVovanic/react-quiz-list-learning",
    },
    {
      id: 5,
      src: getImageUrl(4, "photos"),
      description:
        "Another qiuz project. Still in progress. You can create, delete, change learning cards and cards pack, follow yours and other people progress. The app is creating with React(hooks), Redux, Thunks, Type script, Material UI, SCSS",
      active: false,
      webUrl: "https://VovanVovanic.github.io/teamProject",
      gitUrl: "https://github.com/VovanVovanic/teamProject",
    },
    {
      id: 6,
      src: getImageUrl(5, "photos"),
      description:
        "TODO. Classic app for all developers 😊 Just a beginning of my react learning. Made only with React class components and Bootstrap",
      active: false,
      webUrl: "https://VovanVovanic.github.io/todo",
      gitUrl: "https://github.com/VovanVovanic/todo",
    },
    {
      id: 7,
      src: getImageUrl(6, "photos"),
      description:
        "Just an example of landing page. Fake burger shop landing page with slider, accordions, smooth scroll. Created with HTML5, SCSS, Vanilla JS. Build with Gulp",
      active: false,
      webUrl: "https://vovanvovanic.github.io/burgerLanding/dist/index.html",
      gitUrl: "https://github.com/VovanVovanic/burgerLanding",
    },
    {
      id: 8,
      src: getImageUrl(7, "photos"),
      description:
        "Another example of landing page. Fake pulsometer shop with small animation, slider, tabs, modals, smooth scroll. Made with HTML5, SCSS, Vanilla js, Font awesome. Build with Gulp",
      active: false,
      webUrl: "https://vovanvovanic.github.io/pulseLanding/dist/index.html",
      gitUrl: "https://github.com/VovanVovanic/pulseLanding",
    },
    {
      id: 9,
      src: getImageUrl(8, "photos"),
      description:
        "And one more landing example. Fake diet food provider's shop. Has a modal, slider, daily kkal calculation, timer for the end of the offer. Made with Vanilla JS, HTML5, SCSS. Build with Gulp",
      active: false,
      webUrl:
        "https://vovanvovanic.github.io/foodDietLandingPureJs/dist/index.html",
      gitUrl: "https://github.com/VovanVovanic/foodDietLandingPureJs",
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
          <div className={classes.WorksList}>{worksCurrentList}</div>
        </div>
      </Parallax>
    </section>
  );
}
export default Works