import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
	ChanelDetail,
	Feed,
	Navbar,
	SearchFeed,
	VideoDetail,
	SideBar,
	Videos,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<Box sx={{ backgroundColor: '#000' }}>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Feed />} />
					<Route path="/video/:id" element={<VideoDetail />} />
					<Route path="/chanel/:id" element={<ChanelDetail />} />
					<Route path="/search/:searchTerm" element={<SearchFeed />} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
};

export default App;

// https://www.youtube.com/watch?v=dyFVwXROzZk&t=2412s&ab_channel=JavaScriptMastery 50:48
