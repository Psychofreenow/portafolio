import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';

const projectContext = createContext({});

export const useProjectContext = () => {
	return useContext(projectContext);
};

function ProjectProvider({ children }) {
	const { data, loading, error } = useFetch(
		`${import.meta.env.VITE_HOST}/api/projects/`,
	);

	console.log(data);
	// if (loading) return <div>cargando...</div>;
	return (
		<projectContext.Provider value={'hol'}>{children}</projectContext.Provider>
	);
}

export default ProjectProvider;
