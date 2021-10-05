import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Desktop from '../components/Layout/Desktop'
import Characters from '../components/Pages/Characters'
import Comics from '../components/Pages/Comics'
import RouteWithLayout from './RouteWithLayout'

export default function Routes(): ReactElement {
    return (
        <div>
            <Router>
                <Redirect to="/comics" />
                <Switch>
                    <RouteWithLayout
                        component={Comics}
                        exact
                        layout={Desktop}
                        path="/comics" />
                </Switch>
                <Switch>
                    <RouteWithLayout
                        component={Characters}
                        exact
                        layout={Desktop}
                        path="/characters" />
                </Switch>
            </Router>
        </div>
    )
}
