import React, { ReactElement } from "react";
import { Route } from "react-router-dom";

interface Props {
    layout: React.ComponentType<any>;
    component: React.ComponentType<any>;
    [rest: string]: any;

}

export default function RouteWithLayout(props: Props): ReactElement {
    const { layout: Layout, component: Component, ...rest } = props;

    return (
        <div>
            <Route {...rest}
                render={matchProps => (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                )}>
            </Route>
        </div>
    )
}
