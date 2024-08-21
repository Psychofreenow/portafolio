import styles from './styles.module.css';
import { useProjectContext } from '../../context/ProjectProvider';

function Card() {
	const { data, loading, error } = useProjectContext();

	if (loading) return <div>cargando...</div>;

	const mappedProjects = data.response?.data.map(project => {
		return {
			id: project.project_id,
			name: project.name,
			technologies: project.technologies,
			images: project.images,
		};
	});

	return (
		<div
			// Borrar luego styles
			style={{
				display: 'flex',
				gap: '1rem',
				padding: '2rem',
			}}
		>
			{mappedProjects.map(el => {
				const { id, name, images } = el;
				return (
					<figure key={id} className={styles.card}>
						<img src={images} alt={name} className={styles.cardImg} />
						<p className={styles.cardTitle}>{name}</p>
					</figure>
				);
			})}
		</div>
	);
}

export default Card;
