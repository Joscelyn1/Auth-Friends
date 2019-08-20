import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

// ({ component, ...rest }) is shorthand for  👇
// const props = {
//   component: {},
//   exact: true,
//   path: '/protected',
//   render: null,
// }

// const component = props.component;
// const rest = {
//   exact: props.exact,
//   path: props.path,
//   render: props.render
// }
