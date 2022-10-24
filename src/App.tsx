import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import './App.css'
import Alert from './components/Alert';
import { AlertProvider } from './contexts/alertContext';
import { GlobalStyle } from './style/reset';
import Load from "./components/Load";
import { lazy, Suspense } from "react";
import SideBar from "./components/SideBar";
import styled from "styled-components";

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
                    <MainContainer>
                        <SideBar />
                        <Routes>
                            <Route path='/' element={<ListPage />} />
                            <Route path='/achievements' element={<AchievementsPage />} />
                            <Route path='/pokedex' element={<PokedexPage />} />
                            <Route path='/help' element={<HelpPage />} />
                            <Route path='/configurations' element={<ConfigPage />} />
                        </Routes>
                    </MainContainer>
                </BrowserRouter>
                <Alert />
            </AlertProvider>
        </>
    );
}

export default App;

const MainContainer = styled.main`
    width: 100vw;
    height: 100%;

    display: flex;

    @media (max-width: 650px) {
        width: 90%;
        
        justify-content: space-between;

        margin: 0 !important;

        overflow-x: hidden;
        line-height: 1;
    }
`;