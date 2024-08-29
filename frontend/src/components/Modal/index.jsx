import styles from './styles.module.css';

function Modal({ children, open }) {
	if (!open) return;

	return <div className={styles.modal}>{children}</div>;
}

export default Modal;
