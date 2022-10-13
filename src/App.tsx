import { useContext } from "react";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SignInPage from "./router/SignIn";
import SignUp from "./router/SingUp";
import TodoContainer from "./router/todo/TodoContainer";
import NotFound from "./router/NotFound";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  if (!token) return <Navigate to="/" state={{ from: location }} replace />;
  return children;
};

const EmptyToken = ({ children }: { children: JSX.Element }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  if (token) return <Navigate to="/todos" state={{ from: location }} replace />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
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
            path="/todos"
            element={
              <RequireAuth>
                <TodoContainer />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
