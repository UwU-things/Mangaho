import { Route, Routes } from 'react-router';

import Home from './pages/home';

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default Rotas;