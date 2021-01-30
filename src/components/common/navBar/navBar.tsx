import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { navigateTo } from '../../../redux/actions/navigation';
import { navType } from '../../../redux/reducers/navigation';
import { RootStateType } from '../../../redux/store';
import Button from '../button/button';
import classes from './navBar.module.scss'


type NavPropsType = {
  isOpen?: boolean
  onMenuClose?: ()=>void
}
const NavBar:React.FC<NavPropsType> = ({isOpen, onMenuClose}) => {
  const nav = useSelector<RootStateType, navType>(state => state.nav.navLinks)
  const dispatch = useDispatch();
  
    const onNavHandler = (name: string) => {
      dispatch(navigateTo(name));
      onMenuClose && onMenuClose()
    };

    const links = nav.map(({ name, active, to, iconCode }) => {
     
      return (
        <li key={name}>
          <Button
            name={name}
            active={active}
            to={to}
            iconCode={iconCode}
            onClick={()=>onNavHandler(name)}
          />
        </li>
      );
    });
  const isVisible = isOpen &&  classes.active;
  return <ul className={classes.navList + ' ' + isVisible}>{links}</ul>;
}
export default NavBar