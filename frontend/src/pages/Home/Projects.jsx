import styles from './styles.module.css';
import ProjectSection from '../../components/ProjectSection';
import Modal from '../../components/Modal';
import { useProjectContext } from '../../context/ProjectProvider';
import { useState } from 'react';

function Projects() {
	const [open, setOpen] = useState(false);

	const { data, loading, error } = useProjectContext();

	const handleClose = () => {
		setOpen(!open);
	};

	if (loading) return <div>cargando...</div>;

	const mappedProjects = data.response?.data.map(project => ({
		id: project.project_id,
		name: project.name,
		technologies: project.technologies,
		images: project.images,
	}));

	return (
		<section className={styles.projects} id='projects'>
			<Modal open={open} />
			<h4>Proyectos</h4>
			<ProjectSection projects={mappedProjects} />
		</section>
	);
}

export default Projects;
