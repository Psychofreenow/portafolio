import styles from './styles.module.css';
import Tags from './Tags';

function Card({ children, name, image, tags, onClick }) {
	return (
		<>
			{children}
			<figure className={styles.card} onClick={onClick}>
				<img src={image} alt={name} className={styles.cardImg} />
				<p className={styles.cardTitle}>{name}</p>
				<Tags tags={tags} />
			</figure>
		</>
	);
}

export default Card;
