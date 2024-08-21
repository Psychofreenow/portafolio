import styles from './styles.module.css';
import { clsx } from 'clsx';

function Button({ children, typeBtn, size, center }) {
	const classNames = clsx(
		{
			[styles.button]: true,
			[styles.typeDark]: typeBtn === 'dark',
			[styles.typeWhite]: typeBtn === 'white',
			[styles.typeRed]: typeBtn === 'red',
			[styles.typeTransparent]: typeBtn === 'transparent',
		},
		{
			// [styles.md]: size === 'md',
			// [styles.lg]: size === 'lg',
			// [styles.xl]: size === 'xl',
		},
		{
			[styles.center]: center === true,
		},
	);
	return <div className={classNames}>{children}</div>;
}
export default Button;
