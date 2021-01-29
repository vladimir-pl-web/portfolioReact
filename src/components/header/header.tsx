import classes from './header.module.scss';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { navType } from '../../redux/reducers/navigation';
import { navigateTo } from '../../redux/actions/navigation';
import Button from '../common/button/button';


 const Header = () => {
  const nav = useSelector<RootStateType, navType>(state => state.nav.navLinks)
   const dispatch = useDispatch()

   const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  let isActive = isMenuOpen && classes.active
   const toggleMenuMode = () => {
     toggleMenu(!isMenuOpen);
   }

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
        <div>
          <h4 style={{ textAlign: "left" }}>Tel: +371 26273354</h4>
          <h4 style={{ textAlign: "left" }}>
            Email: vladimirplotnikov371@gmail.com
          </h4>
        </div>

        <nav>
          <ul className={classes.navList}>{links}</ul>
        </nav>
        <div
          className={classes.Hamburger + " " + isActive}
          onClick={toggleMenuMode}
        >
          <span className={classes.HamburgerItem}></span>
          <span className={classes.HamburgerItem}></span>
          <span className={classes.HamburgerItem}></span>
        </div>
      </div>
    </header>
  );
}
export default Header