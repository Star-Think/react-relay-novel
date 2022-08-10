import React from 'react';

import { Routes, Route } from 'react-router-dom';
import RelayDetail from '../pages/relay/RelayDetail';
import RelayMain from '../pages/relay/RelayMain';

const RelayRoute = () => {
	return (
		<Routes>
			<Route exact path='/' element={<RelayMain />} />
			<Route exact path='/detail/:idx' element={<RelayDetail />} />
		</Routes>
	);
};

export default RelayRoute;
