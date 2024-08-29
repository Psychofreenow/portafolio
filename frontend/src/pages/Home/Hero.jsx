import styles from './styles.module.css';
import ButtonAnchor from '../../components/Button/ButtonAnchor';

function Hero() {
	return (
		<section className={styles.hero} id='home'>
			<div className={styles.text}>
				<p>
					<span>Franklin Márquez</span>
				</p>
				<h1>Fullstack Web Developer</h1>
				<ButtonAnchor
					buttonText='Mis proyectos'
					href='#projects'
					typeBtn='red'
				/>
			</div>
		</section>
	);
}

export default Hero;
