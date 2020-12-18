import React from 'react';
import {PageRoute} from "../pages/pages.types";

const RoutingContext = React.createContext({
   activePage: PageRoute.WELCOME,
   setActivePage: (page: PageRoute) => {},
});

export default RoutingContext;