import React from 'react'
import ConfigRoutes from '../../../config/routes'
import { Redirect, Switch, Route } from 'react-router-dom'
function PrivateRoutes(props) {
    const role = props.role || 'guest';

    const allowRoutes = ConfigRoutes[role].allowRoutes;
    const redirectRoute = ConfigRoutes[role].redirectRoutes;

    return (
        <Switch>
            {allowRoutes.map(route => (
                <Route
                    path={route.url}
                    key={route.url}
                    exact
                >
                    <route.component setRole={props.setRole} />
                </Route>
            ))}
            <Redirect to={redirectRoute}/>
        </Switch>
    )
}

export default PrivateRoutes
