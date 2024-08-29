import styles from './styles.module.css';

function Textarea({ name, value, error, onChange, placeholder }) {
	return (
		<>
			<textarea
				className={styles.textarea}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			></textarea>
			<p className={styles.error}>{error}</p>
		</>
	);
}

export default Textarea;
