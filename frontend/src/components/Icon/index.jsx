import styles from './styles.module.css';

function Icon({ children, title, typeIcon, onClick, st }) {
	const isSmall = typeIcon === 'sm' ? '24px' : '80px';

	const small = {
		width: `${isSmall}`,
		height: `${isSmall}`,
	};

	return (
		<div className={styles.icon} onClick={onClick} style={{ ...small, ...st }}>
			<div>{children}</div>
			<span>{title}</span>
		</div>
	);
}

export default Icon;
