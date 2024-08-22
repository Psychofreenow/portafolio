import styles from './styles.module.css';
import ButtonLink from '../Button/ButtonLink';
import ButtonAnchor from '../Button/ButtonAnchor';
import clsx from 'clsx';
import Xicon from '../Icon/Xicon';

function Nav({ open, handleClick }) {
	const classNames = clsx({
		[styles.nav]: true,
		[styles.isOpen]: open,
	});

	return (
		<nav className={classNames}>
			<Xicon className={styles.xicon} onClick={handleClick} typeIcon='sm' />
			<ButtonLink buttonText='home' to='/home' typeBtn='transparent' />
			<ButtonAnchor
				buttonText='proyectos'
				href='#projects'
				typeBtn='transparent'
			/>
			<ButtonAnchor buttonText='about' href='#about' typeBtn='transparent' />
			<ButtonLink buttonText='Blog' to='/blog' typeBtn='transparent' />
			<ButtonLink buttonText='contacto' to='/contact' typeBtn='transparent' />
		</nav>
	);
}

export default Nav;
