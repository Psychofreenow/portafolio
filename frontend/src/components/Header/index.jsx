import styles from './styles.module.css';
import Nav from './nav';
import menubar from '../../assets/images/menubar.png';
import { useState } from 'react';

function Header() {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<header className={styles.header}>
			<a href='/home' className={styles.logo}>
				<span>Portafolio.</span>
			</a>
			<Nav open={open} handleClick={handleClick} />
			<img src={menubar} className={styles.menubar} onClick={handleClick} />
		</header>
	);
}

export default Header;
