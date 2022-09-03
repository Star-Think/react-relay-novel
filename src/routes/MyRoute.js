import React from 'react';

import { Routes, Route } from 'react-router-dom';
import MyDetail from '../pages/my/MyDetail';
import MyMain from '../pages/my/MyMain';

const MyRoute = () => {
    return (
        <Routes>
            <Route exact path="/" element={<MyMain />} />
            <Route exact path="/detail/:idx" element={<MyDetail />} />
        </Routes>
    );
};

export default MyRoute;
