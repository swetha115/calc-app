import React, { Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Redirect } from "react-router";
class AsyncRouteComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { canActivate: false }
    }

    render() {
        return  (<this.props.route.loadChildren.component
                routeConfig={this.props.route.loadChildren.routeConfig} />) 
    }
};

const RouterOutletSwitch = ({ routeConfig }) => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            { routeConfig.routes && routeConfig.routes.map((route, index) => {
                return route.path === "/" ? (
                    <Route exact={route.exact}
                        path="/"
                        component={() => <Redirect to="/login" />}
                    />
                ) :
                    (
                        <Route
                            key={path + index}
                            path={(path + route.path).replace(/\/\//g, '/')}
                            exact={route.exact}
                            render={props => <AsyncRouteComponent {...props} route={route} /> }
                        />
                    )
            })}
             <Redirect from="*" to="/" />
        </Switch>
    )
}
export const RouterOutlet = ({ routeConfig }) => (
    <>
        <Suspense fallback={routeConfig.fallback}>
            <RouterOutletSwitch routeConfig={routeConfig} />
        </Suspense>
    </>
)