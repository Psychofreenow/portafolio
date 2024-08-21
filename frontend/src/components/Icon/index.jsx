import styles from './styles.module.css';

function Icon({ children, title, typeIcon }) {
	const isSmall = typeIcon === 'sm' ? '24px' : '80px';
	return (
		<div className={styles.icon}>
			<div
				style={{
					width: `${isSmall}`,
					height: `${isSmall}`,
				}}
			>
				{children}
			</div>
			<span>{title}</span>
		</div>
	);
}

export default Icon;
