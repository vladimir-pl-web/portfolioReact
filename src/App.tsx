import classes from './main.module.scss';
import React, {Suspense} from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
const SuspendedContacts = React.lazy(()=> import('./components/contacts/contacts'))
const SuspendedSkills = React.lazy(() => import('./components/skills/skills'));
const SuspendedWorks = React.lazy(() => import('./components/works/works'));
const SuspendedAbout = React.lazy(() => import('./components/about/about'));

function App() {
  return (
    <main className={classes.Main}>
      <Header />
      <Suspense
        fallback={<div style={{ background: "black", height: "100vh", width: "100vw" }}>Loading...</div>}>
        <Route path="/" exact render={() => <SuspendedAbout />} />
        <Route path="/works" render={() => <SuspendedWorks />} />
        <Route path="/skills" render={() => <SuspendedSkills />} />
        <Route path="/contacts" render={() => <SuspendedContacts />} />
      </Suspense>
    </main>
  );
}

export default App;

