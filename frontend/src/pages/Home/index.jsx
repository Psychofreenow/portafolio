import styles from './styles.module.css';
import Hero from './Hero';
import About from './About';
import MyHabilities from './MyHabilities';
import Footer from './Footer';

function HomePage() {
	return (
		<main className={styles.main}>
			<Hero />
			<About />
			<MyHabilities />
			<Footer />
		</main>
	);
}

export default HomePage;
