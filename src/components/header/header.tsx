import classes from './header.module.scss';
import React from 'react'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <h1> Header </h1>
        <nav>
          <ul></ul>
        </nav>
      </div>
    </header>
  );
}
export default Header