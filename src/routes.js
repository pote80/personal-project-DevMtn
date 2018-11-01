import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cart from './Component/Cart/Cart';
import Checkout from './Component/Checkout/Checkout';
import Dashboard from './Component/Dashboard/Dashboard';

export default (
    <Switch>
        <Route component={Dashboard} exact path='/'/>
        <Route component={Cart} exact path='/cart'/>
        <Route component={Checkout} exact path='/checkout'/>
    </Switch>
)