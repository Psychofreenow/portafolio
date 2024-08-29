import styles from './styles.module.css';

function Input({
	type,
	name,
	value,
	error,
	onChange,
	placeholder,
	icon,
	required,
}) {
	return (
		<>
			<div className={styles.input}>
				{icon}
				<div className={styles.containerInput}>
					<input
						type={type}
						onChange={onChange}
						name={name}
						value={value}
						placeholder={placeholder}
						className={styles.containerInput__input}
						required={required}
					/>
				</div>
			</div>
			<p className={styles.error}>{error}</p>
		</>
	);
}
export default Input;
