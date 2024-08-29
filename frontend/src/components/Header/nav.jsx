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
			<div className={styles.xicon}>
				<Xicon onClick={handleClick} typeIcon='sm' color='#000' />
			</div>
			<ButtonAnchor buttonText='home' href='#home' typeBtn='transparent' />
			<ButtonAnchor
				buttonText='proyectos'
				href='#projects'
				typeBtn='transparent'
			/>
			<ButtonAnchor buttonText='about' href='#about' typeBtn='transparent' />
			<ButtonLink buttonText='Blog' to='#' typeBtn='transparent' />
			<ButtonAnchor
				buttonText='contacto'
				href='#contact'
				typeBtn='transparent'
			/>
		</nav>
	);
}

export default Nav;
