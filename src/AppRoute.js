import React from 'react';
import {
    BrowserRouter as Router,
    Routers,
    Route,
    Routes
} from 'react-router-dom';
import Body from './components/Body';
import Dashboard from './pages/Dashboard';
import DashboardRoute from './pages/Dashboard/DashboardRoute';

const AppRoute = () => {
    return (
        <Router>
            <Routes>
                {DashboardRoute.map((route) => (
                    <Route path={route.path} component={route.component} key={route.path} />
                ))}
                <Route path="/" element={<Body />} />
            </Routes>
        </Router>
    );
}

export default AppRoute;
