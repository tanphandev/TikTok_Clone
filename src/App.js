import { Fragment, useEffect } from 'react';
import { DefaultLayout } from '~/Layouts';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import { publicRoutes, privateRoutes } from '~/Routes';
import authenticationSlice from './redux-toolkit/Slices/authenticationSlice';
import * as AuthService from '~/services/authService';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        const checkCurrentUser = async (token) => {
            const res = await AuthService.getProfile(token);
            if (!!res.data) {
                dispatch(authenticationSlice.actions.changeIsCurrentUser(true));
            } else {
                dispatch(authenticationSlice.actions.changeIsCurrentUser(false));
                localStorage.removeItem('token');
                localStorage.removeItem('currentUser');
            }
        };
        checkCurrentUser(token);
    }, []);
    return (
        <BrowserRouter>
            <div className="App">
                <ToastContainer style={{ fontSize: '1.4rem' }} position="top-center" autoClose={3000} />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
