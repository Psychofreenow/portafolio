import styles from './styles.module.css';

function Icon({ children, title, typeIcon, onClick, className }) {
	const isSmall = typeIcon === 'sm' ? '24px' : '80px';
	return (
		<div className={styles.icon} onClick={onClick} className={className}>
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
