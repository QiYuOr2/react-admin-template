import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Loading from '../components/Loading';
import config, { RouterConfig } from './router';

const renderRoutes = (routes?: RouterConfig[]) => {
  return (
    <Switch>
      {routes?.map((route) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.key}
              exact={route.exact}
              strict={route.strict}
              from={route.path}
              to={route.redirect}
            />
          );
        }

        return (
          <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
              const renderChildren = renderRoutes(route.children);

              if (route.component) {
                return (
                  <Suspense fallback={<Loading />}>
                    <route.component {...props} route={route}>
                      {renderChildren}
                    </route.component>
                  </Suspense>
                );
              }
              return renderChildren;
            }}
          />
        );
      })}
    </Switch>
  );
};

const AppRouter: React.FC = () => <Router>{renderRoutes(config)}</Router>;

export default AppRouter;
