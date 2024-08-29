import styles from './styles.module.css';
import Modal from '.';
import ButtonAnchor from '../Button/ButtonAnchor';
import Tags from '../Card/Tags';
import Xicon from '../Icon/Xicon';
import GithubIcon from '../Icon/githubIcon';
import LinkIcon from '../../components/Icon/LinkIcon';

function IconsContainer({ repository, clientURL }) {
	return (
		<div className={styles.IconsContainer}>
			<ButtonAnchor
				typeBtn='dark'
				href={repository}
				target='_blank'
				buttonText='Repositorio'
				icon={<GithubIcon typeIcon='sm' color='#ffffff' />}
			/>
			<ButtonAnchor
				typeBtn='dark'
				href={clientURL}
				target='_blank'
				buttonText='Web'
				icon={<LinkIcon typeIcon='sm' color='#ffffff' />}
			/>
		</div>
	);
}

function ModalProject({
	name,
	description,
	image,
	technologies,
	repository,
	client,
	clientURL,
	handleClick,
	open,
}) {
	return (
		<Modal open={open}>
			<div className={styles.modalProject}>
				<div className={styles.modalProjectContainer}>
					<Xicon
						color='#fff'
						typeIcon='sm'
						onClick={handleClick}
						st={{
							position: 'absolute',
							top: '2rem',
							right: '5rem',
						}}
					/>
					<figure className={styles.figure}>
						<img src={image} alt={name} />
					</figure>
					<div className={styles.text}>
						<p className={styles.text__name}>{name}</p>
						<p className={styles.text__description}>{description}</p>
						<p className={styles.text__client}>Cliente: {client}</p>
						<IconsContainer repository={repository} clientURL={clientURL} />
						<Tags tags={technologies} />
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default ModalProject;
