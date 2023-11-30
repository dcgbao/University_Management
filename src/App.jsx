import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page_Dashboard from './pages/Page_Dashboard/Page_Dashboard';
import Page_Monitor_Temperature from './pages/Page_Monitor_Temperature/Page_Monitor_Temperature';
import Page_Monitor_Humidity from './pages/Page_Monitor_Humidity/Page_Monitor_Humidity';
import Page_Monitor_SoilMoisture from './pages/Page_Monitor_SoilMoisture/Page_Monitor_SoilMoisture';
import Page_Devices_Bulb from './pages/Page_Devices_Bulb/Page_Devices_Bulb';
import Page_Devices_Pumper from './pages/Page_Devices_Pumper/Page_Devices_Pumper';
import MissingPage from './components/MissingPage/MissingPage';
import MainLayout from './components/MainLayout/MainLayout';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route path='/dashboard' element={<Page_Dashboard />} />
						<Route
							path='/monitor/temperature'
							element={<Page_Monitor_Temperature />}
						/>
						<Route
							path='/monitor/humidity'
							element={<Page_Monitor_Humidity />}
						/>
						<Route
							path='/monitor/soilmoisture'
							element={<Page_Monitor_SoilMoisture />}
						/>
						<Route
							path='/devices/bulb'
							element={<Page_Devices_Bulb />}
						/>
						<Route
							path='/devices/pumper'
							element={<Page_Devices_Pumper />}
						/>
						<Route path='*' element={<MissingPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
