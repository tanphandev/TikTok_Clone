import { Fragment, useEffect } from 'react';
import { DefaultLayout } from '~/Layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import { publicRoutes, privateRoutes } from '~/Routes';
import { checkCurrentUser } from './redux-toolkit/Slices/authenticationSlice';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        dispatch(checkCurrentUser({ token }));
    }, [dispatch]);
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
