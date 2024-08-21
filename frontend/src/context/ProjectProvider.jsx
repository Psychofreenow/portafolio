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

	return (
		<projectContext.Provider value={{ data, loading, error }}>
			{children}
		</projectContext.Provider>
	);
}

export default ProjectProvider;
