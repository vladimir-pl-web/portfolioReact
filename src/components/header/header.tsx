import classes from './header.module.scss';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { navType } from '../../redux/reducers/navigation';
import { navigateTo } from '../../redux/actions/navigation';
import Button from '../button/button';

 const Header = () => {
  const nav = useSelector<RootStateType, navType>(state => state.nav.navLinks)
  const dispatch = useDispatch()
  const onNavHandler = (name: string) => {
    dispatch(navigateTo(name));
  }
  const links = nav.map(({ name, active, to, iconCode }) => {
    const isActive = active && classes.active
    return (
      <li key={name}>
        <Button
          name={name}
          active={active}
          to={to}
          iconCode={iconCode}
        />
      </li>
    );
  })
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <h4>Vladimir </h4>
        <nav>
          <ul className={classes.navList}>{links}</ul>
        </nav>
      </div>
    </header>
  );
}
export default Header