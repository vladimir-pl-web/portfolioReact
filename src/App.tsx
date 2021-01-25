import classes from './main.module.scss';
import React from 'react';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import Works from './components/works/works';
import { Route } from 'react-router-dom';

function App() {
  return (
    <main className={classes.Main}>
      <Header />
      <Route path="/" exact render={() => <About />} />
      <Route path="/skills" render={() => <Skills />} />
      <Route path="/works" render={() => <Works />} />
      <Route path="/contacts" render={() => <Contacts />} />
    </main>
  );
}

export default App;

