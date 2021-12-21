import IRoute from "../interfaces/route";
import HomePage from "../pages/Home";


const blogRoutes: IRoute[] = [];

const mainRoutes: IRoute[] = [
  {
    path: "/",
    element: HomePage,
    name: "Home"
  }
];

const routes: IRoute[] = [
  ...blogRoutes,
  ...mainRoutes
];


export default routes;
