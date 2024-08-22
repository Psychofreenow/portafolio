import styles from './styles.module.css';
import Hero from './Hero';
import About from './About';
import MyHabilities from './MyHabilities';
import Footer from './Footer';
import Projects from './Projects';
import ProjectProvider from '../../context/ProjectProvider';

function HomePage() {
	return (
		<main className={styles.main}>
			<ProjectProvider>
				<Hero />
				<Projects />
				<About />
				<MyHabilities />
				<Footer />
			</ProjectProvider>
		</main>
	);
}

export default HomePage;
