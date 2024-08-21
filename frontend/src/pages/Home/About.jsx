import ButtonGeneric from '../../components/Button/ButtonGeneric';
import styles from './styles.module.css';

function About() {
	return (
		<>
			<section className={styles.about} id='about'>
				<div className={styles.pattern}></div>
				<div className={styles.aboutText}>
					<p>
						Hola, me llamo <span>Franklin Márquez.</span> Cuento con más de
						<span> +2 años</span> de experiencia como desarrollador Fullstack.
						Me he desenvuelto en diversos proyectos de alto rendimiento con
						tecnologías como <span>React, Node/Express y MySQL.</span>
					</p>
					<p>
						<span>Poseo un background en marketing</span>, ya que mi vida en los
						negocios y la tecnología comenzó en 2017, cuando tuve mis primeros
						acercamientos como <span>Community Manager </span>y, más tarde, como{' '}
						<span>Social Media Manager.</span> Esto me ha llevado a adquirir un
						conocimiento profundo acerca de las necesidades de los clientes, lo
						que, junto con mis conocimientos como desarrollador web, me ha
						convertido en un profesional altamente capacitado,
						<span> cuyo principal enfoque es la satisfacción del cliente.</span>
					</p>
					<p>
						Te invito a <span>cotizar mis servicios</span> y descubrir la mejor
						manera de hacer realidad tu idea. ¡Te espero!
					</p>
					<ButtonGeneric buttonText='Cotizar ahora' typeBtn='red' />
				</div>
			</section>
		</>
	);
}

export default About;
