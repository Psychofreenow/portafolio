import styles from './styles.module.css';
import ButtonGeneric from '../../components/Button/ButtonGeneric';

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.text}>
				<p>
					<span>Franklin Márquez</span>
				</p>
				<h1>Fullstack Web Developer</h1>
				<ButtonGeneric buttonText='Mis proyectos' typeBtn='red' />
			</div>
		</section>
	);
}

export default Hero;
