import React from "react";
import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса

// При попытке перейти на любой защищённый роут происходит редирект на /.

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to='./signin' />
      }
    </Route>
  );
};

export default ProtectedRoute; 