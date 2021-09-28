import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from './RouteWithLayout'
import Desktop from '../components/Layout/Desktop'
import Comics from '../components/Pages/Comics'
import Characters from '../components/Pages/Characters'

interface Props {

}

export default function Routes({ }: Props): ReactElement {
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
