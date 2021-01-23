import classes from './main.module.scss';
import React from 'react';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import Works from './components/works/works';

function App() {
  return (
    <main className={classes.Main}>
      <Header />
      <About />
      {/* <Skills />
      <Works />
      <Contacts /> */}
    </main>
  );
}

export default App;

