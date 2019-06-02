import React from 'react';
import { Route, Switch } from 'react-router-dom';

// 引入页面
import Home from 'pages/home';
import Movie from 'pages/movie';

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/movie" component={Movie}/>
    </Switch>
);

export default getRouter;
