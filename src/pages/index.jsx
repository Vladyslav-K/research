import React, { memo, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// pages
import FieldArrayForm from 'pages/FieldArrayForm';
import HighPerformanceForm from 'pages/HighPerformanceForm';
import SimpleForm from 'pages/SimpleForm';

// components
import Header from 'components/Header';

// styles
import './index.css';

ReactGA.initialize('UA-173971988-2', { debug: true });

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Header />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames='fade'>
              <Switch location={location}>
                <Route exact path='/' component={SimpleForm} />
                <Route exact path='/field-array' component={FieldArrayForm} />
                <Route exact path='/high-performance-form' component={HighPerformanceForm} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
};

export default memo(App);
