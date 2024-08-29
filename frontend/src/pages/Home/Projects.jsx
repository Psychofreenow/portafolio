import styles from './styles.module.css';
import ProjectSection from '../../components/ProjectSection';
import ModalAllProjects from '../../components/Modal/ModalAllProjects';
import ButtonGeneric from '../../components/Button/ButtonGeneric';
import { useProjectContext } from '../../context/ProjectProvider';
import { useState } from 'react';

function Projects() {
	const { data, loading, error } = useProjectContext();

	const [open, setOpen] = useState(false);

	if (loading) return <div>cargando...</div>;

	const mappedProjects = data.response?.data.map(project => ({
		id: project.project_id,
		name: project.name,
		description: project.descriptionOfProject,
		technologies: project.technologies,
		images: project.images,
		repository: project.repository,
		client: project.client,
		clientURL: project.client_src,
	}));

	const handleClose = () => {
		setOpen(!open);
	};

	return (
		<section className={styles.projects} id='projects'>
			<h4>Proyectos</h4>
			<ProjectSection projects={mappedProjects} />
			<ModalAllProjects
				projects={mappedProjects}
				handleClose={handleClose}
				open={open}
			/>
			<ButtonGeneric
				buttonText='Ver todos los proyectos'
				center
				typeBtn='red'
				onClick={handleClose}
			/>
		</section>
	);
}

export default Projects;
