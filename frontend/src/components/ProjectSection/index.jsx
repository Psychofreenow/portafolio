import styles from './styles.module.css';
import Card from '../Card';

function ProjectSection({ projects }) {
	const toRender = projects.map(project => {
		const { name, images, technologies } = project;
		return (
			<Card key={project.id} name={name} image={images} tags={technologies} />
		);
	});

	return <div className={styles.projectSection}>{toRender}</div>;
}

export default ProjectSection;
