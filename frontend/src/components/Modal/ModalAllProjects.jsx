import { useState } from 'react';
import Modal from '.';
import Card from '../Card';
import Xicon from '../Icon/Xicon';
import ModalProject from './ModalProject';
import styles from './styles.module.css';

function ModalAllProjects({ projects, handleClose, open }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const toRender = projects.map(project => {
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
						open={isOpen}
					/>
				</Card>
			</>
		);
	});

	return (
		<Modal open={open}>
			<div className={styles.modalAllProjects}>
				<Xicon
					color='#fff'
					typeIcon='sm'
					onClick={handleClose}
					st={{
						position: 'absolute',
						top: '2rem',
						right: '5rem',
					}}
				/>
				{toRender}
			</div>
		</Modal>
	);
}

export default ModalAllProjects;
