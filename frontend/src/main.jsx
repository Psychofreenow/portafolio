import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import './styles/fonts.css';
import Root from './routes/Root.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
	{
		path: 'admin/login',
		element: <Login />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
