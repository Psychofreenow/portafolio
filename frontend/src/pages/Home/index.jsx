import styles from './styles.module.css';
import Hero from './Hero';
import About from './About';
import MyHabilities from './MyHabilities';
import Footer from './Footer';
import Card from '../../components/Card';

function HomePage() {
	return (
		<main className={styles.main}>
			<Hero />
			<Card />
			<About />
			<MyHabilities />
			<Footer />
		</main>
	);
}

export default HomePage;
