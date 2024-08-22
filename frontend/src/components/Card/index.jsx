import styles from './styles.module.css';
import Tags from './Tags';

function Card({ name, image, tags }) {
	return (
		<figure className={styles.card}>
			<img src={image} alt={name} className={styles.cardImg} />
			<p className={styles.cardTitle}>{name}</p>
			<Tags tags={tags} />
		</figure>
	);
}

export default Card;
