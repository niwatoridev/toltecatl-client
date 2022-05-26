import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import Works from "../pages/works/Works";
import AddWork from "../pages/works/AddWorks";
import Feed from "../pages/feed/Feed"
import * as PATHS from "../utils/paths";
import Loading from "../components/Loading"
import WorksPage from "../pages/works/Works";

function validateRoute({isLoading, ...rest}, Component) {

  if (isLoading) {
    return <Loading/>
  } 
  if (!rest.user) {
  return <Navigate to={PATHS.LOGINPAGE} replace />
  }

  return <Component {...rest} />
} 

const routes = (props) => {
  const { user, isLoading } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.ADDWORK,
      element: <AddWork {...props} />,
    },
    {
      path: PATHS.PORTFOLIO,
      element: <WorksPage {...props} />,
    },
        {
      path: PATHS.FEED,
      element: validateRoute(props, Feed)
    },
  ];
};

export default routes;


export const ADDWORK = "/works/add"
export const WORKS = "/works"
export const FEED = "/feed"
