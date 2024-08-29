import styles from './styles.module.css';
import Hero from './Hero';
import About from './About';
import MyHabilities from './MyHabilities';
import Footer from './Footer';
import Projects from './Projects';
import ProjectProvider from '../../context/ProjectProvider';
import Contact from './Contact';

function HomePage() {
	return (
		<main className={styles.main}>
			<Hero />
			<ProjectProvider>
				<Projects />
			</ProjectProvider>
			<About />
			<MyHabilities />
			<Contact />
			<Footer />
		</main>
	);
}

export default HomePage;
