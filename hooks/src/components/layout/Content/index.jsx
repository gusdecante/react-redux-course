import './styles.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, NotFound, UseCallback, UseContext, UseCustom, UseEffect, UseMemo, UseReducer, UseRef, UseState } from "../../../views/examples"

const Content = props => (
    <main className="content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/useState">
                <UseState />
            </Route>
            <Route path="/useEffect">
                <UseEffect />
            </Route>
            <Route path="/useRef">
                <UseRef />
            </Route>
            <Route path="/useCallback">
                <UseCallback />
            </Route>
            <Route path="/useMemo">
                <UseMemo />
            </Route>
            <Route path="/useContext">
                <UseContext />
            </Route>
            <Route path="/useReducer">
                <UseReducer />
            </Route>
            <Route path="/useCustom">
                <UseCustom />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content