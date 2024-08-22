import styles from './styles.module.css';

function Tags({ tags }) {
	const tagToRender = tags.map(tag => (
		<span key={tag.technology_id}>{tag.technology}</span>
	));

	return <div className={styles.tags}>{tagToRender}</div>;
}

export default Tags;
