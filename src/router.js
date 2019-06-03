import React from 'react';
import { Route, Switch } from 'react-router-dom';

// 引入页面
// import Home from 'pages/home';
// import Movie from 'pages/movie';

// 引入页面(按需加载)
import loadable from 'react-loadable';
import Loading from 'components/Loading';

const Home = loadable({
    loader: () => import('pages/home'),
    loading: Loading,
    timeout: 10000,
});

const Movie = loadable({
    loader: () => import('pages/movie'),
    loading: Loading,
    timeout: 10000,
});

const NotFound = loadable({
    loader: () => import('pages/notfound'),
    loading: Loading,
    timeout: 10000,
});

// 路由
const getRouter = () => (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/movie" component={Movie} />
        <Route component={NotFound} />
    </Switch>
);

export default getRouter;
