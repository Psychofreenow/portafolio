import styles from './styles.module.css';
import ButtonLink from '../Button/ButtonLink';
import ButtonAnchor from '../Button/ButtonAnchor';
import xicon from '../../assets/images/xicon.png';
import clsx from 'clsx';

function Nav({ open, handleClick }) {
	const classNames = clsx({
		[styles.nav]: true,
		[styles.isOpen]: open,
	});

	return (
		<nav className={classNames}>
			<img src={xicon} className={styles.xicon} onClick={handleClick} />
			<ButtonLink buttonText='home' to='/home' typeBtn='transparent' />
			<ButtonLink buttonText='proyectos' to='/projects' typeBtn='transparent' />
			<ButtonAnchor buttonText='about' href='#about' typeBtn='transparent' />
			<ButtonLink buttonText='Blog' to='/blog' typeBtn='transparent' />
			<ButtonLink buttonText='contacto' to='/contact' typeBtn='transparent' />
		</nav>
	);
}

export default Nav;
