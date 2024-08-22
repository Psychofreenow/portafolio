import styles from './styles.module.css';

function Modal({ children, open }) {
	if (!open) return;

	return (
		<div className={styles.modal}>
			<div>{children}</div>
		</div>
	);
}

export default Modal;
