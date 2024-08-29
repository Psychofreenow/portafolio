import styles from './styles.module.css';
import Card from '../Card';
import ModalProject from '../Modal/ModalProject';
import { useState } from 'react';

function ProjectSection({ projects }) {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const toRender = projects.map((project, index) => {
		const {
			id,
			name,
			description,
			images,
			technologies,
			repository,
			client,
			clientURL,
		} = project;

		return (
			<>
				<Card
					key={id}
					name={name}
					image={images}
					tags={technologies}
					onClick={handleClick}
				>
					<ModalProject
						key={id}
						name={name}
						description={description}
						image={images}
						technologies={technologies}
						repository={repository}
						client={client}
						clientURL={clientURL}
						handleClick={handleClick}
						open={open}
					/>
				</Card>
			</>
		);
	});

	return <div className={styles.projectSection}>{toRender}</div>;
}

export default ProjectSection;
