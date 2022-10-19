import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import './App.css'
import Alert from './components/Alert';
import { AlertProvider } from './contexts/alertContext';
import { GlobalStyle } from './style/reset';
import Load from "./components/Load";
import { lazy, Suspense } from "react";
import SideBar from "./components/SideBar";

const Loading = () => {
    return <Load />
};

const LazyWrapper = (Component: any) => (props: any) => (
    <Suspense fallback={<Loading />}>
        <Component {...props} />
    </Suspense>
)

const ListPage = LazyWrapper(lazy(() => import('./pages/ListPage')));
const AchievementsPage = LazyWrapper(lazy(() => import('./pages/AchievementsPage')));
const PokedexPage = LazyWrapper(lazy(() => import('./pages/PokedexPage')));
const HelpPage = LazyWrapper(lazy(() => import('./pages/HelpPage')));
const ConfigPage = LazyWrapper(lazy(() => import('./pages/ConfigPage')));

function App() {
    return (
        <>
            <GlobalStyle />
            <CssBaseline />
            <AlertProvider>
                <BrowserRouter>
                    <SideBar />
                    <Routes>
                        <Route path='/' element={<ListPage />} />
                        <Route path='/achievements' element={<AchievementsPage />} />
                        <Route path='/pokedex' element={<PokedexPage />} />
                        <Route path='/help' element={<HelpPage />} />
                        <Route path='/configurations' element={<ConfigPage />} />
                    </Routes>
                </BrowserRouter>
                <Alert />
            </AlertProvider>
        </>
    );
}

export default App;