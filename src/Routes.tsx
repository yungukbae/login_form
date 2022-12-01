import React from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import {
  Navigate,
  Route,
  Routes as ReactRouterRoutes,
  useLocation,
} from "react-router-dom";
import SignInPage from "./router/SignIn";
import SignUp from "./router/SingUp";
import TodoContainer from "./router/todo/TodoContainer";
import NotFound from "./router/NotFound";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  if (!token) return <Navigate replace to="/" state={{ from: location }} />;
  return children;
};

const EmptyToken = ({ children }: { children: JSX.Element }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  if (token) return <Navigate replace to="/todo" state={{ from: location }} />;
  return children;
};

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
          <EmptyToken>
            <SignInPage />
          </EmptyToken>
        }
      />
      <Route
        path="/signup"
        element={
          <EmptyToken>
            <SignUp />
          </EmptyToken>
        }
      />
      <Route
        path="/todo"
        element={
          <RequireAuth>
            <TodoContainer />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
