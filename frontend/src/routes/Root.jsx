import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import ProjectProvider from '../context/ProjectProvider';

function Root() {
	return (
		<>
			<ProjectProvider>
				<Header />
				<Outlet />
			</ProjectProvider>
		</>
	);
}

export default Root;
