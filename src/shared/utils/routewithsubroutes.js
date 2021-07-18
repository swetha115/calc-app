import React from 'react'
import { Route, useLocation } from 'react-router';
const RouteWithSubroutes = (route) => {
    return (
        <Route path={route.path}
            render={(props) => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
};
export default RouteWithSubroutes