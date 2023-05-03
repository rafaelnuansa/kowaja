import { Route, Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = userAuth();

  return (
    <Route
      {...rest}
      element={currentUser ? <Element /> : <Navigate to="/login" />}
    />
  );
}
