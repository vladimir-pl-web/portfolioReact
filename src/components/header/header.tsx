import classes from './header.module.scss';

import NavBar from '../common/navBar/navBar';


type HeaderPropsType = {
  isMenuOpen: boolean
  onMenuHandler: (value:boolean)=>void
}
 const Header:React.FC<HeaderPropsType> = ({isMenuOpen, onMenuHandler}) => {
   let isActive = isMenuOpen && classes.active 
 
   
   const toggleMenuMode = () => {
     onMenuHandler(!isMenuOpen);
   }
   const onClose =()=> {
     onMenuHandler(false);
   }
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.headerContacts}>
          <h4 style={{ textAlign: "left" }}>Tel: +371 26273354</h4>
          <h4 style={{ textAlign: "left" }}>
            Email: vladimirplotnikov371@gmail.com
          </h4>
        </div>
        <NavBar isOpen={isMenuOpen} onMenuClose={onClose} />
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