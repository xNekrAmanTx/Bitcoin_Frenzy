import { Route, Switch } from 'react-router-dom';
import { routes } from '../../constants/routes';
import Header from './Header';
import NavBar from './NavBar';
import HistoryBar from './HistoryBar';

const Layout = () => {
    return (
        <div className='layout-wrapper'>
            <Header />
            <main>
                <NavBar />
                <Switch>
                    {routes.map(({ path, Component }, i) => <Route key={i} path={path} exact >
                        <div className='main-content'>
                            <Component />
                        </div>
                    </Route>)}
                </Switch>
                <HistoryBar />
            </main>
        </div>
    );
};

export default Layout;
