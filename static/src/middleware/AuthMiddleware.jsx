import { useEffect } from "react";
import { useNavigate, useLocation, matchPath } from "react-router-dom";

const AuthMiddleware = ({ isAuth, children, excludeRoutes = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const isExcluded = excludeRoutes.some(route =>
      matchPath(route, currentPath) || matchPath(route.replace(":id", "*"), currentPath)
    );

    if (!isAuth && !isExcluded) {
      navigate("/login");
    }
  }, [isAuth, excludeRoutes, currentPath, navigate]);

  return children;
};

export default AuthMiddleware;
